import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/axiosget";
import Loader from "../components/Loader";
import android from "../assets/android.png";
import apple from "../assets/apple.png";
import nintendo from "../assets/nintendo.png";
import playstation from "../assets/playstation.png";
import windows from "../assets/windows.png";
import xbox from "../assets/xbox.png";
import linux from "../assets/linux.png";
import ios from "../assets/ios.png";
import web from "../assets/web.png";

const About = () => {
  const getRatingColor = (title) => {
    switch (title.toLowerCase()) {
      case "exceptional":
        return "bg-green-500";
      case "recommended":
        return "bg-blue-500";
      case "meh":
        return "bg-orange-500";
      case "skip":
        return "bg-red-500";
      default:
        return "bg-gray-300";
    }
  };

  const platforms = {
    pc: windows,
    playstation: playstation,
    xbox: xbox,
    mac: apple,
    nintendo: nintendo,
    android: android,
    linux: linux,
    ios: ios,
    web: web,
  };
  const key = "95f2c8e2be17420e87436b373a116be4";
  const [game, setGame] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetchData(`games/${id}`, { key });
        setGame(response);
        console.log(response);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };

    fetchGames();
  }, [id]);

  const linearGradient = `linear-gradient(to bottom, transparent, black)`;

  return (
    <div className="p-20 justify-center text-[#25283B]">
      {game ? (
        <div>
          {" "}
          <div className="flex">
            {" "}
            <img
              src={game.background_image}
              alt=""
              className="w-full sm:w-1/2 rounded-lg shadow-lg z-10"
            />
            <div className="flex flex-col w-1/2 items-center px-20">
              <h1 className="text-8xl font-bold">{game.name}</h1>
              <div className="flex w-full justify-between px-30 mt-10">
                <div className="flex items-center">
                  <p className="">release date:</p>
                  <p className="mx-4  border border-[#25283B] p-2 rounded-md">
                    {game.released}
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="">esrb rating:</p>
                  <p className="mx-4 border border-[#25283B] p-2 rounded-md">
                    {game.esrb_rating.name}
                  </p>
                </div>
              </div>
              <div className="flex w-full p-3 m-4 justify-center gap-4">
                {game.parent_platforms.map((platform, index) => (
                  <img
                    key={index}
                    src={platforms[platform.platform.slug]}
                    alt={platform.platform.slug}
                    className="w-6 h-6 mr-2"
                  />
                ))}
              </div>
              <div className="flex w-full p-3 m-2">
                {game.ratings.map((rating, index) => (
                  <div
                    key={index}
                    style={{ width: `${rating.percent}%` }}
                    className={`p-2 shadow-lg text-white ${getRatingColor(
                      rating.title
                    )}`}
                  >
                    {rating.title}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex p-10">
            <div className=" w-1/2">
              {<div dangerouslySetInnerHTML={{ __html: game.description }} />}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center h-screen items-center">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default About;
