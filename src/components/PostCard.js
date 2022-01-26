import Axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import API from "../api/api";

export default function PostCard({ post, reqList }) {
  const handlerDelete = (e) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this User",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        Axios.delete(API.Url + "/" + e.target.id).then((res) => {
          reqList();
          return swal("User has been deleted!", {
            icon: "success",
          });
        });
      } else {
        swal("User not deleted");
      }
    });
  };
  return (
    <div className="user">
      <div className="user-name">id: {post.id}</div>
      <div className="user-email">title: {post.title}</div>
      <div className="user-gender">body: {post.body}</div>

      <div className="actions">
        <div className="delete">
          <i onClick={handlerDelete} id={post.id} className="fa fa-trash"></i>
        </div>
        <div className="edit">
          <Link to={`/edit-post/${post.id}`}>
            <i className="fa fa-edit"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
