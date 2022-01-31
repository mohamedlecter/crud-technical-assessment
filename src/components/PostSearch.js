import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { Button } from "@material-ui/core";

export default function PostSearch(props) {
  const [search, setSearch] = useState("");
  const Search = (e) => {
    e.preventDefault();
    console.log(props);
  };
  return (
    <div className="serach-bar">
      <div className="search-bar-container">
        <form style={{ margin: "15px 0" }} onSubmit={Search}>
          <input
            onChange={(e) => setSearch(e.target.value)}
            className="addForm-input"
            type="text"
            placeholder="Search for post"
            className=""
            style={{
              border: "1px white solid",
              borderRadius: "10px",
              padding: "5px 10px",
            }}
          />
          <Button className="btn" type="submit">
            <Link to={`/search-for-post/${search}`}>
              <BiSearch />
            </Link>
          </Button>
        </form>
      </div>
    </div>
  );
}
