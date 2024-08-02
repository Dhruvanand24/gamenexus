import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Dropdown from "../components/Dropdown";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import { fetchData } from "../utils/axiosget";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { useSelector } from "react-redux";
import Animatedhero from "../components/animatedhero";

const Home = () => {
  const handleClick = (id) => {
    navigate(`/about/${id}`, { state: { from: location } });
  };
  const location = useLocation();
  const navigate = useNavigate();
  const key = "95f2c8e2be17420e87436b373a116be4";

  const [games, setGames] = useState([]);
  const page = useSelector((state) => state.page);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetchData("games", {
          page: page,
          page_size: 10,
          key,
        });
        console.log(response.results);
        setGames(response.results);
        console.log();
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };

    fetchGames();
  }, [page]);

  return (
    <div className="p-20 flex flex-col">
      {/* <Hero /> */}
      <Animatedhero />
      <div className="flex justify-between items-center mb-6">
        <div>
          <Dropdown />
        </div>
        <Pagination />
      </div>
      <div className="flex mt-10 gap-8 flex-wrap justify-center">
        {games && games.length > 0 ? (
          games.map((game) => (
            <Card
              key={game.id}
              name={game.name}
              image={game.background_image}
              parentplatforms={game.parent_platforms}
              metacritic={game.metacritic}
              id={game.id}
            />
          ))
        ) : (
          <Loader />
        )}
      </div>
      <div className="flex justify-between items-center mb-6 lg:hidden">
        <div>
          <Dropdown />
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default Home;
