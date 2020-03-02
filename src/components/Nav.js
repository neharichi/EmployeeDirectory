import React, { useContext } from "react";
import SearchBox from "../components/SearchBox";

import "../styles/Nav.css";
import DataContext from "../utils/DataContext.js"

function Nav() {
  const data = useContext(DataContext)
 
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse row" id="navbarNav">       
        <div className="search-area col-10">
          <SearchBox handleSearchChange={data.handleSearchChange} />
        </div>
      </div>
    </nav>
  );
}
export default Nav;
