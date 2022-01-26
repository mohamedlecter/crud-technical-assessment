import React, { useEffect, useState } from "react";
import Axios from "axios";
import PostCard from "./PostCard";
import UserCard from "./UserCard";
import { Link } from "react-router-dom";

const ListUsers = () => {
  const [listItems, setListItems] = useState([]);
  const [users, SetUsers] = useState([]);
  const reqUserList = () => {
    Axios.get("https://gorest.co.in/public-api/users").then((res) => {
      SetUsers(res.data.data);
    });
  };
  useEffect(() => {
    reqUserList();
  }, []);

  const reqPostList = () => {
    Axios.get("https://gorest.co.in/public-api/posts").then((res) => {
      setListItems(res.data.data);
    });
  };
  useEffect(() => {
    reqPostList();
  }, []);

  return (
    <div>
      <li>
        <Link to="/add-post">Add</Link>
      </li>
      <ul>
        {listItems.map((post) => (
          <li key={post.id}>
            <PostCard post={post} reqPostList={reqPostList}></PostCard>
          </li>
        ))}
      </ul>
      <li>
        <Link to="/add-contact">Add</Link>
      </li>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <UserCard user={user} reqUserList={reqUserList}></UserCard>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ListUsers;
