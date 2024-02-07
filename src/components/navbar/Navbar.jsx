import React, { useState } from "react";
import { useRef } from "react";
const Navbar = ({ fetchMovie }) => {
  const inputRef = useRef();
  const [newItem, setNewItem] = useState("");

  // function to show movie data on screen

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMovie(newItem);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <a href="/">
          <h1>Movie Guide</h1>
        </a>
      </div>
      <div className="search-container">
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search Movie"
            ref={inputRef}
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button
            className="btn"
            type="submit"
            onClick={() => inputRef.current.focus()}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
