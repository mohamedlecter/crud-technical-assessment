import Axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import API from "../api/api";

export default function PostCard({ post, reqPostList }) {
  const handlerDelete = (e) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this User",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          Axios.delete(API.posts + "/" + e.target.id).then((res) => {
            reqPostList();
            return swal("Post has been deleted!", {
              icon: "success",
            });
          });
        } else {
          swal("User not deleted");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="user">
      <div className="user-name">id: {post.id}</div>
      <div className="user-email">title: {post.title.substring(0, 30)}</div>
      <div className="user-gender">body: {post.body.substring(0, 150)}</div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignContent: "center",
        }}
      >
        <div style={{ marginRight: " 12px" }}>
          <Link to={`/edit-post/${post.id}`}>
            <i style={{ color: "white" }} className="fa fa-edit"></i>
          </Link>
        </div>
        <div>
          <i
            onClick={handlerDelete}
            id={post.id}
            style={{ color: "var(--red)" }}
            className="fa fa-trash"
          ></i>
        </div>
      </div>
    </div>
  );
}
