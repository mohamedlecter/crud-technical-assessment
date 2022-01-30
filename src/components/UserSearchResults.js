import React, { useEffect, useState } from "react";
import Axios from "axios";
import UserCard from "./UserCard";
import API from "../api/api";
import UserSearch from "./UserSearch";
import { useHistory, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import "../styles/users.css";
export default function UserSearchResults(props) {
  const [listItems, setListItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const reqList = () => {
    setLoading(true);
    Axios.get(API.users + "?name=" + name)
      .then((res) => {
        if (res.data.data.length === 0) {
          setLoading(false);
          setListItems(res.data.data);
        } else {
          setLoading(false);
          setListItems(res.data.data);
        }
      })
      .catch(() => setLoading(false));
  };
  let { name } = useParams();

  console.log(name);

  useEffect(() => {
    reqList();
  }, [name]);

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="header">
          <h2 style={{ padding: 0, margin: 0 }}>Contacts</h2>
          <UserSearch />
        </div>
        {listItems.length !== 0 ? (
          <ul className="usersContainer">
            {listItems.map((user) => (
              <li key={user.id} className="userCard">
                <UserCard user={user} reqList={reqList}></UserCard>
              </li>
            ))}
          </ul>
        ) : (
          <div>
            {loading ? (
              <div className="spiner"></div>
            ) : (
              <div>No users were found</div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
