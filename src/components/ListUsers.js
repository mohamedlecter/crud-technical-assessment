import React, { useEffect, useState } from "react";
import Axios from "axios";
import UserCard from "./UserCard";
import API from "../api/api";
import UserSearch from "./UserSearch";
import NavBar from "./NavBar";
import "../styles/users.css";

export default function ListUsers() {
  const [users, SetUsers] = useState([]);
  const reqUserList = () => {
    Axios.get(API.users).then((res) => {
      SetUsers(res.data.data);
    });
  };
  useEffect(() => {
    reqUserList();
  }, []);

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="header">
          <h2 style={{ padding: 0, margin: 0 }}>Contacts</h2>
          <UserSearch />
        </div>
        <ul className="usersContainer">
          {users.map((user) => (
            <li key={user.id} className="userCard">
              <UserCard user={user} reqUserList={reqUserList}></UserCard>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
