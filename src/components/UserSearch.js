import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/users.css";
import { BiSearch } from "react-icons/bi";
import { InputBase } from "@material-ui/core";
export default function UserSearch(props) {
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
            placeholder="Search for contact"
            className=""
            style={{
              border: "1px white solid",
              borderRadius: "10px",
              padding: "5px 10px",
            }}
          />
          <Button className="btn" type="submit">
            <Link to={`/search-for-contact/${search}`}>
              <BiSearch />
            </Link>
          </Button>
        </form>
      </div>
    </div>
  );
}
