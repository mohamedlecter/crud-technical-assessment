import React from "react";
import EditUser from "./components/EditUser";
import ListUsers from "./components/ListUsers";
import AddUser from "./components/AddUser";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import AddPost from "./components/AddPost";
import EditPost from "./components/EditPost";
import UserSearchResults from "./components/UserSearchResults";
import PostSearchResults from "./components/PostSearchResults";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ListUsers />}></Route>
        <Route exact path="/add-contact" element={<AddUser />}></Route>
        <Route exact path="/add-post" element={<AddPost />}></Route>
        <Route path="/edit-contact/:id" element={<EditUser />}></Route>
        <Route path="/edit-post/:id" element={<EditPost />}></Route>
        <Route
          exact
          path="/search-for-contact/:name"
          element={<UserSearchResults />}
        ></Route>
        <Route
          exact
          path="/search-for-post/:title"
          element={<PostSearchResults />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
