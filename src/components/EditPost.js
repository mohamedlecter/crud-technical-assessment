import Axios from "axios";
import React, { useState, useEffect } from "react";
import API from "../api/api";
import swal from "sweetalert";
import { useHistory, useParams } from "react-router-dom";

export default function EditPost(props) {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  let { id } = useParams();

  console.log(id);
  // let id = props.match.params.id;
  useEffect(() => {
    setLoading(true);
    Axios.get(API.Url + "/" + id)
      .then((res) => {
        setLoading(false);
        setTitle(res.data.data.title);
        setBody(res.data.data.body);
      })
      .catch(() => {
        setLoading(false);
        props.history.push("/");
      });
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps
  const handlerSub = (e) => {
    e.preventDefault();
    Axios.patch(API.Url + "/" + id, {
      title,
      body,
    }).then((res) => {
      if (res.data.code === 200) {
        props.history.push("/");
        return swal(
          "Good job!",
          `Changes saved user Id ${res.data.data.id}`,
          "success"
        );
      }
    });
  };
  const handlerChangeEmail = (e) => {
    setBody(e.target.value);
  };
  const handlerChangeName = (e) => {
    setTitle(e.target.value);
  };

  // if (loading) {
  //   return <div className="spiner"></div>;
  // } else {
  return (
    <div className="Add-user">
      <h2>Edit Post</h2>
      <form onSubmit={handlerSub} className="addForm">
        <input
          className="addForm-input"
          onChange={handlerChangeName}
          value={title}
          name="title"
          type="text"
          placeholder="title"
          required
        />
        <input
          className="addForm-input"
          onChange={handlerChangeEmail}
          value={body}
          name="email"
          type="text"
          placeholder="Email"
          required
        />

        <button className="btn" type="submit">
          {" "}
          Save
        </button>
      </form>
    </div>
  );
  // }
}
