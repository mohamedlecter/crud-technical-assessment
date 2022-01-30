import React, { useEffect, useState } from "react";
import Axios from "axios";
import UserCard from "./UserCard";
import API from "../api/api";
import PostSearch from "./PostSearch";
import { useHistory, useParams } from "react-router-dom";
import PostCard from "./PostCard";
import "../styles/posts.css";
import NavBar from "./NavBar";

export default function PostSearchResults(props) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const reqPostList = () => {
    setLoading(true);
    Axios.get(API.posts + "?title=" + title)
      .then((res) => {
        if (res.data.data.length === 0) {
          setLoading(false);
          setPosts(res.data.data);
        } else {
          setLoading(false);
          setPosts(res.data.data);
        }
      })
      .catch(() => setLoading(false));
  };
  let { title } = useParams();

  console.log(title);

  useEffect(() => {
    reqPostList();
  }, [title]);

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="header">
          <h2 style={{ padding: 0, margin: 0 }}>Posts</h2>
          <PostSearch />
        </div>
        {posts.length !== 0 ? (
          <ul className="postsContainer">
            {posts.map((post) => (
              <li key={post.id} className="postCard">
                <PostCard post={post} reqList={reqPostList}></PostCard>
              </li>
            ))}
          </ul>
        ) : (
          <div>
            {loading ? (
              <div className="spiner"></div>
            ) : (
              <div>No posts with were found</div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
