import Axios from "axios";
import React, { useState } from "react";
import API from "../api/api";
import swal from "sweetalert";
import { useNavigate } from "react-router";
import NavBar from "./NavBar";
import { Button } from "@material-ui/core";
import "../styles/addPost.css";

export default function AddUser(props) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("Male");
  const [Userstate, setUserState] = useState("Active");
  const [email, setEmail] = useState("");
  let navigate = useNavigate();

  const handlerSub = (e) => {
    e.preventDefault();
    Axios.post(API.users, {
      name,
      email,
      gender,
      status: Userstate,
    }).then((res) => {
      if (res.data.code === 201) {
        navigate("/contacts");
        swal(
          "Good job!",
          `New Post Created! with Id ${res.data.id}`,
          "success"
        );
      }
    });
  };
  const handlerChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlerChangeName = (e) => {
    setName(e.target.value);
  };
  const handlerGender = (e) => {
    setGender(e.target.value);
  };
  return (
    <>
      <NavBar />
      <div
        style={{ backgroundColor: "#007acd", paddingTop: "80px" }}
        className="conatiner"
      >
        <h2>Add New Contact</h2>
        <form onSubmit={handlerSub} className="form">
          <input
            className="formInput"
            onChange={handlerChangeName}
            value={name}
            name="name"
            type="text"
            placeholder="name"
            required
          />
          <input
            className="formInput"
            onChange={handlerChangeEmail}
            value={email}
            name="email"
            type="email"
            placeholder="email"
            required
          />
          <div className="selectors">
            <div className="gender">
              <p>Please select the gender:</p>
              <div>
                <input
                  onChange={handlerGender}
                  type="radio"
                  name="gender"
                  defaultChecked
                  value="Male"
                />
                <label htmlFor="Male">Male</label>
              </div>
              <div>
                <input
                  onChange={handlerGender}
                  type="radio"
                  name="gender"
                  value="Female"
                />
                <label htmlFor="Female">Female</label>
              </div>
            </div>
          </div>
          <div className="btn">
            <Button type="submit">ADD contact</Button>
          </div>
        </form>
        <div style={{ backgroundColor: "#007acd", height: "210px" }}></div>
      </div>
    </>
  );
}
