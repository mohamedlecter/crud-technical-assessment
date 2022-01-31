import Axios from "axios";
import React, { useState, useEffect } from "react";
import API from "../api/api";
import swal from "sweetalert";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/addPost.css";
import NavBar from "./NavBar";
import { Button } from "@material-ui/core";

export default function EditPost(props) {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  let { id } = useParams();
  let navigate = useNavigate();

  console.log(id);
  // let id = props.match.params.id;
  useEffect(() => {
    setLoading(true);
    Axios.get(API.posts + "/" + id)
      .then((res) => {
        setLoading(false);
        setTitle(res.data.data.title);
        setBody(res.data.data.body);
      })
      .catch(() => {
        setLoading(false);
        navigate("/");
      });
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps
  const handlerSub = (e) => {
    e.preventDefault();
    Axios.patch(API.posts + "/" + id, {
      title,
      body,
    })
      .then((res) => {
        if (res.data.code === 200) {
          navigate("/");
          console.log(res.data.data);
          return swal(
            "Post Edited",
            `Changes saved to post titled ${res.data.data.title}`,
            "success"
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handlerChangeEmail = (e) => {
    setBody(e.target.value);
  };
  const handlerChangeName = (e) => {
    setTitle(e.target.value);
  };

  if (loading) {
    return <div className="spiner"></div>;
  } else {
    return (
      <>
        <NavBar />
        <div
          style={{
            backgroundColor: "#007acd",
            justifyContent: "center",
            alignItems: "center",
            display: "grid",
          }}
          className="container"
        >
          <h2>Edit Post</h2>
          <form onSubmit={handlerSub} className="form">
            <input
              className="formInput"
              onChange={handlerChangeName}
              value={title}
              name="title"
              type="text"
              placeholder="title"
              required
            />
            <input
              className="formInput"
              onChange={handlerChangeEmail}
              value={body}
              name="email"
              type="text"
              placeholder="Email"
              required
            />

            <div className="btn">
              <Button type="submit">Save</Button>
            </div>
          </form>
          <div style={{ backgroundColor: "#007acd", height: "350px" }}></div>
        </div>
      </>
    );
  }
}
