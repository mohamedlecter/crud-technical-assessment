import Axios from "axios";
import React, { useState } from "react";
import API from "../api/api";
import swal from "sweetalert";

export default function AddPost(props) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const handlerSub = (e) => {
    e.preventDefault();
    Axios.post("https://gorest.co.in/public-api/posts", {
      title,
      body,
    }).then((res) => {
      if (res.data.code === 201) {
        props.history.push("/");
        swal(
          "Good job!",
          `New Post Created! with Id ${res.data.id}`,
          "success"
        );
      }
    });
  };
  const handlerChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handlerChangeBody = (e) => {
    setBody(e.target.value);
  };

  return (
    <div className="Add-user">
      <h2>Add New Post</h2>
      <form onSubmit={handlerSub} className="addForm">
        <input
          className="addForm-input"
          onChange={handlerChangeTitle}
          value={title}
          name="title"
          type="text"
          placeholder="title"
          required
        />
        <input
          className="addForm-input"
          onChange={handlerChangeBody}
          value={body}
          name="body"
          placeholder="body"
          required
        />
        <button className="btn" type="submit">
          {" "}
          ADD contact
        </button>
      </form>
    </div>
  );
}
