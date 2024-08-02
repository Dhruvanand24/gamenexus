import React from "react";
import "./animatedhero.css";
import eldenring from "../assets/eldenring.jpg";
import nfs from "../assets/nfs.png";
import lastofus from "../assets/lastofus.jpg";
import tombraider from "../assets/tombraider.webp";
import godofwar from "../assets/godofwar.jpg";
import assasinscreed from "../assets/assasinscreed.jpg";
import cyberpunk from "../assets/cyberpunk.png";
import darksouls from "../assets/darksouls.webp";
import reddeadredemption from "../assets/reddeadredemption.jpg";
import uncharted from "../assets/uncharted.jpg";

const AnimatedHero = () => {
  return (
    <div className="banner">
      <div className="slider" style={{ "--quantity": 10 }}>
        <div className="item" style={{ "--position": 1 }}>
          <img src={eldenring} alt="Dragon 1" />
        </div>
        <div className="item" style={{ "--position": 2 }}>
          <img src={nfs} alt="Dragon 2" />
        </div>
        <div className="item" style={{ "--position": 3 }}>
          <img src={lastofus} alt="Dragon 3" />
        </div>
        <div className="item" style={{ "--position": 4 }}>
          <img src={tombraider} alt="Dragon 4" />
        </div>
        <div className="item" style={{ "--position": 5 }}>
          <img src={godofwar} alt="Dragon 5" />
        </div>
        <div className="item" style={{ "--position": 6 }}>
          <img src={assasinscreed} alt="Dragon 6" />
        </div>
        <div className="item" style={{ "--position": 7 }}>
          <img src={cyberpunk} alt="Dragon 7" />
        </div>
        <div className="item" style={{ "--position": 8 }}>
          <img src={darksouls} alt="Dragon 8" />
        </div>
        <div className="item" style={{ "--position": 9 }}>
          <img src={reddeadredemption} alt="Dragon 9" />
        </div>
        <div className="item" style={{ "--position": 10 }}>
          <img src={uncharted} alt="Dragon 10" />
        </div>
      </div>
      <div className="content">
        <h1 data-content="GameNexus">GameNexus</h1>
        <div className="author"></div>
        <div className="model"></div>
      </div>
    </div>
  );
};

export default AnimatedHero;
