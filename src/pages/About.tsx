import React from "react";
import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/asset.gif";
import { FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      <img src={avatarImage} alt="" className="profile-image" />
      <h1 className="profile-text">Aaryav Behlh</h1>
      <h2 className="profile-text">The creator of this pokedex.</h2>
      <h4 className="profile-text">
        Check out my other projects:
      </h4>
      <div className="profile-links">
        <a href="https://github.com/aaryavbehl">
          <FaGithub />
        </a>
        <a href="https://www.youtube.com/@aaryavtech">
          <FaYoutube />
        </a>
        <a href="https://www.linkedin.com/in/aaryavbehl/">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);
