import Axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import API from "../api/api";

export default function UserCard({ user, reqUserList }) {
  const handlerDelete = (e) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this User",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        console.log(willDelete);
        if (willDelete) {
          Axios.delete(API.users + "/" + e.target.id).then((res) => {
            reqUserList();
            return swal("User has been deleted!", {
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
      <div className="user-name">Name: {user.name}</div>
      <div className="user-email">Email: {user.email}</div>
      <div className="user-gender">Gender: {user.gender}</div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignContent: "center",
        }}
      >
        <div style={{ marginRight: " 12px" }}>
          <Link to={`/edit-contact/${user.id}`}>
            <i className="fa fa-edit" style={{ color: "white" }}></i>
          </Link>
        </div>
        <div>
          <i
            onClick={handlerDelete}
            id={user.id}
            style={{ color: "var(--red)" }}
            className="fa fa-trash"
          ></i>
        </div>
      </div>
    </div>
  );
}
