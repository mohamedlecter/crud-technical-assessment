import React, { useEffect, useState } from "react";
import Axios from "axios";
import PostCard from "./PostCard";
import UserCard from "./UserCard";
import { Link } from "react-router-dom";
import API from "../api/api";
import UserSearch from "./UserSearch";
import PostSearch from "./PostSearch";

const ListUsers = () => {
  const [posts, setPosts] = useState([]);
  const [users, SetUsers] = useState([]);
  const reqUserList = () => {
    Axios.get(API.users).then((res) => {
      SetUsers(res.data.data);
    });
  };
  useEffect(() => {
    reqUserList();
  }, []);

  const reqPostList = () => {
    Axios.get(API.posts).then((res) => {
      setPosts(res.data.data);
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
      <PostSearch />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <PostCard post={post} reqPostList={reqPostList}></PostCard>
          </li>
        ))}
      </ul>
      <li>
        <Link to="/add-contact">Add</Link>
      </li>
      <UserSearch />
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
