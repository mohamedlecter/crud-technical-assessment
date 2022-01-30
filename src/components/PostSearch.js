import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function PostSearch(props) {
  const [search, setSearch] = useState("");
  const Search = (e) => {
    e.preventDefault();
    console.log(props);
  };
  return (
    <div className="search">
      <form className="search-form" onSubmit={Search}>
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="addForm-input"
          type="text"
          placeholder="Search for User"
        />
        {search !== "" ? (
          <button className="btn" type="submit">
            <Link to={`/search-for-post/${search}`}>Search</Link>
          </button>
        ) : (
          <button className="btn btn-disabled" type="submit" disabled>
            Search
          </button>
        )}
      </form>
    </div>
  );
}
