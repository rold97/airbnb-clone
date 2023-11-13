"use client";
import { useState } from "react";
import SearchBar from "./components/SearchBar";

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <header className="container flex justify-between items-center h-10 border-b bg-white z-50 fixed w-full">
      <div className="text-red-500">airbnb</div>
      {isExpanded ? (
        <SearchBar />
      ) : (
        <button
          className="search-container rounded-lg flex gap-4"
          onClick={toggleExpanded}
        >
          <div className="input border-r">
            <p>Anywhere</p>
          </div>
          <div className="input border-r">
            <p>Any Date</p>
          </div>
          <div className="input border-r">
            <p>Add Guest</p>
          </div>
          <div className="search-btn">Search</div>
        </button>
      )}
      <div>user</div>
    </header>
  );
};

export default Header;
