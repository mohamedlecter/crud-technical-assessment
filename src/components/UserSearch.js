import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/users.css";
import { BiSearch } from "react-icons/bi";

export default function UserSearch(props) {
  const [search, setSearch] = useState("");
  const Search = (e) => {
    e.preventDefault();
    console.log(props);
  };
  return (
    <div className="serach-bar">
      <div className="search-bar-container">
        <form className="search-form" onSubmit={Search}>
          <input
            onChange={(e) => setSearch(e.target.value)}
            className="addForm-input"
            type="text"
            placeholder="Search for User"
            className=""
          />
          {search !== "" ? (
            <button className="btn" type="submit">
              <Link to={`/search-for-contact/${search}`}>Search</Link>
            </button>
          ) : (
            <Button className="btn btn-disabled" type="submit" disabled>
              <BiSearch />
            </Button>
          )}
        </form>
      </div>
    </div>
  );
}
