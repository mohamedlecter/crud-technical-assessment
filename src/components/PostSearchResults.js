import React, { useEffect, useState } from "react";
import Axios from "axios";
import UserCard from "./UserCard";
import API from "../api/api";
import PostSearch from "./PostSearch";
import { useHistory, useParams } from "react-router-dom";
import PostCard from "./PostCard";

export default function PostSearchResults(props) {
  const [listItems, setListItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const reqPostList = () => {
    setLoading(true);
    Axios.get(API.posts + "?title=" + title)
      .then((res) => {
        if (res.data.data.length === 0) {
          // code 200 ! void data
          //redirect maybe
          // console.log(props);
          setLoading(false);
          setListItems(res.data.data);
        } else {
          setLoading(false);
          setListItems(res.data.data);
        }
      })
      .catch(() => setLoading(false));
  };
  // let name = props.match.params.name;
  let { title } = useParams();

  console.log(title);

  useEffect(() => {
    reqPostList();
  }, [title]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="List">
      <h1>List Posts</h1>
      <PostSearch />
      {listItems.length !== 0 ? (
        <ul>
          {listItems.map((post) => (
            <li key={post.id}>
              <PostCard post={post} reqList={reqPostList}></PostCard>
            </li>
          ))}
        </ul>
      ) : (
        <div>
          {loading ? (
            <div className="spiner"></div>
          ) : (
            <div>No hay Resultados...</div>
          )}
        </div>
      )}
    </div>
  );
}
