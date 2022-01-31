import Axios from "axios";
import React, { useState, useEffect } from "react";
import API from "../api/api";
import swal from "sweetalert";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import "../styles/addPost.css";
import { Button } from "@material-ui/core";
export default function EditUser(props) {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("Male");
  const [Userstate, setUserState] = useState("Active");
  const [email, setEmail] = useState("");
  let { id } = useParams();
  let navigate = useNavigate();

  console.log(id);
  // let id = props.match.params.id;
  useEffect(() => {
    setLoading(true);
    Axios.get(API.users + "/" + id)
      .then((res) => {
        setLoading(false);
        setName(res.data.data.name);
        setGender(res.data.data.gender);
        setEmail(res.data.data.email);
        setUserState(res.data.data.status);
      })
      .catch((error) => {
        setLoading(false);
        navigate("/");
        console.log(error);
      });
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps
  const handlerSub = (e) => {
    e.preventDefault();
    Axios.patch(API.users + "/" + id, {
      name,
      email,
      status: Userstate,
    }).then((res) => {
      console.log(res.data.code);
      if (res.data.code === 200) {
        navigate("/contacts");
        return swal(
          "User Edited",
          `Changes saved user Id ${res.data.data.id}`,
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
  if (loading) {
    return <div className="spiner"></div>;
  } else {
    return (
      <>
        <NavBar />
        <div style={{ backgroundColor: "#007acd" }} className="container">
          <h2>Edit Contact</h2>
          <form onSubmit={handlerSub} className="form">
            <input
              className="formInput"
              onChange={handlerChangeName}
              value={name}
              name="name"
              type="text"
              placeholder="Name"
              required
            />
            <input
              className="formInput"
              onChange={handlerChangeEmail}
              value={email}
              name="email"
              type="email"
              placeholder="Email"
              required
            />
            <div
              className="selectors"
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "grid",
              }}
            >
              <div className="gender">
                <p>Gender:</p>
                {gender === "Male" ? (
                  <>
                    <div>
                      <input
                        type="radio"
                        name="gender"
                        defaultChecked
                        value="Male"
                      />
                      <label htmlFor="Male">Male</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        disabled
                      />
                      <label htmlFor="Female">Female</label>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <input type="radio" name="gender" value="Male" disabled />
                      <label htmlFor="Male">Male</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="gender"
                        defaultChecked
                        value="Female"
                      />
                      <label htmlFor="Female">Female</label>
                    </div>
                  </>
                )}
              </div>
              <div className="btn">
                <Button type="submit">Save</Button>
              </div>
            </div>
          </form>
          <div style={{ backgroundColor: "#007acd", height: "340px" }}></div>
        </div>
      </>
    );
  }
}
