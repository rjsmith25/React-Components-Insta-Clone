// You do not need to change any code in this file
import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar-wrapper">
      <div className="image-wrapper">
        <i className="fab fa-instagram" />
        <hr className="insta-seperator" />
        <p className="brand-name">Instagram</p>
      </div>
      <form style={{ position: "relative" }} className="search-form">
        <input type="text" placeholder="Search" />
        <i
          style={{ position: "absolute", left: "65px", top: "8px" }}
          className="fas fa-search"
        ></i>
      </form>
      <div className="social-wrapper">
        <div className="social">
          <i className="far fa-compass" />
        </div>
        <div className="social">
          <i className="far fa-heart" />
        </div>
        <div className="social">
          <i className="far fa-user-circle" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
