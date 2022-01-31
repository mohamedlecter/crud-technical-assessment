import React, { useState } from "react";
import "../styles/NavBar.css";
import { Button } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function NavBar() {
  const [click, setClick] = useState();
  const handleClick = () => setClick(!click);

  return (
    <div className="nav">
      <div className="nav-container">
        <div className="logo">
          <Link to="/" className="logo">
            Posts and Contacts
          </Link>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/">posts</Link>
          </li>
          <li className="nav-item">
            <Link to="/contacts">contacts</Link>
          </li>
          <li className="nav-item" id="nav-btn">
            <Link to="/add-contact">
              <Button>Add contact </Button>
            </Link>
          </li>

          <li className="nav-item" id="nav-btn2">
            <Link to="/add-post">
              <Button>Add Post</Button>
            </Link>
          </li>
        </ul>
        <div className="mobile-menu" onClick={handleClick}>
          {click ? (
            <i className="fas fa-times fa-lg"></i>
          ) : (
            <i className="fas fa-bars fa-lg"></i>
          )}
        </div>
      </div>
    </div>
  );
}
