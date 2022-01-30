import React, { useEffect, useState } from "react";
import Axios from "axios";
import PostCard from "./PostCard";
import { Link } from "react-router-dom";
import API from "../api/api";
import PostSearch from "./PostSearch";
import NavBar from "./NavBar";
import "../styles/posts.css";

export default function ListPosts() {
  const [posts, setPosts] = useState([]);
  const reqPostList = () => {
    Axios.get(API.posts).then((res) => {
      setPosts(res.data.data);
    });
  };
  useEffect(() => {
    reqPostList();
  }, []);

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="header">
          <h2 style={{ padding: 0, margin: 0 }}>Posts</h2>
          <PostSearch />
        </div>
        <ul className="postsContainer">
          {posts.map((post) => (
            <li key={post.id} className="postCard">
              <PostCard post={post} reqPostList={reqPostList}></PostCard>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
