import Axios from "axios";
import React, { useState } from "react";
import API from "../api/api";
import swal from "sweetalert";
import { useNavigate } from "react-router";
import NavBar from "./NavBar";
import "../styles/addPost.css";
import { Button } from "@material-ui/core";

export default function AddPost(props) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  let navigate = useNavigate();

  const handlerSub = (e) => {
    e.preventDefault();
    Axios.post(API.posts, {
      title,
      body,
    })
      .then((res) => {
        console.log(res.data);
        if (res.data.code === 201) {
          navigate("/");
          swal(
            "Good job!",
            `New Post Created! with Id ${res.data.id}`,
            "success"
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(title);
  };
  const handlerChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handlerChangeBody = (e) => {
    setBody(e.target.value);
  };

  return (
    <>
      <NavBar />
      <div className="conatiner">
        <h2>Add New Post</h2>
        <form onSubmit={handlerSub} className="form">
          <input
            className="formInput"
            onChange={handlerChangeTitle}
            value={title}
            name="title"
            type="text"
            placeholder="title"
            required
          />
          <input
            className="formInput"
            onChange={handlerChangeBody}
            value={body}
            name="body"
            placeholder="body"
            required
          />
          <div className="btn">
            <Button type="submit">ADD POST</Button>
          </div>
        </form>
      </div>
      <div style={{ backgroundColor: "#007acd", height: "280px" }}></div>
    </>
  );
}
