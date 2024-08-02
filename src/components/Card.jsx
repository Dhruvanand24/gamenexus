import React from "react";
import android from "../assets/android.png";
import apple from "../assets/apple.png";
import nintendo from "../assets/nintendo.png";
import playstation from "../assets/playstation.png";
import windows from "../assets/windows.png";
import xbox from "../assets/xbox.png";
import linux from "../assets/linux.png";
import ios from "../assets/ios.png";
import web from "../assets/web.png";

import { Link } from "react-router-dom";

const Card = (props) => {
  const { name, image, parentplatforms, metacritic, id } = props;
  const maxPlatformsToShow = 5;

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

  const size = parentplatforms.length;

  const displayedPlatforms = parentplatforms.slice(0, maxPlatformsToShow);

  return (
    <Link to={`/about/${id}`}>
      {" "}
      <div className="card card-compact w-96 bg-gray-400 ring-2 ring-[#25283B] text-black shadow-xl overflow-hidden">
        <div className="h-48 overflow-hidden">
          <img src={image} alt="game" className="object-cover w-full h-full" />
        </div>

        <div className="card-body">
          <div className="flex">
            {displayedPlatforms.map((platform, index) => (
              <img
                key={index}
                src={platforms[platform.platform.slug]}
                alt={platform.platform.slug}
                className="w-6 h-6 mr-2"
              />
            ))}

            {size > maxPlatformsToShow && (
              <span className="text-sm">+{size - maxPlatformsToShow} more</span>
            )}
          </div>

          <h1 className="card-title">{name}</h1>
          <div className="flex gap-3 items-center">
            <h3>metacritic score</h3>
            <div className="border-x border-y p-1 rounded-md px-2">
              {metacritic || "NA"}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
