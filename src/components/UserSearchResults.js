import React, { useEffect, useState } from "react";
import Axios from "axios";
import UserCard from "./UserCard";
import API from "../api/api";
import UserSearch from "./UserSearch";
import { useHistory, useParams } from "react-router-dom";

export default function UserSearchResults(props) {
  const [listItems, setListItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const reqList = () => {
    setLoading(true);
    Axios.get(API.users + "?name=" + name)
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
  let { name } = useParams();

  console.log(name);

  useEffect(() => {
    reqList();
  }, [name]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="List">
      <h1>List Users</h1>
      <UserSearch />
      {listItems.length !== 0 ? (
        <ul>
          {listItems.map((user) => (
            <li key={user.id}>
              <UserCard user={user} reqList={reqList}></UserCard>
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
