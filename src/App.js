import React from "react";
import EditUser from "./components/EditUser";
import ListUsers from "./components/ListUsers";
// import NavBar from "./components/NavBar";
// import SearchResults from "./components/SearchResults";
import AddUser from "./components/AddUser";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import AddPost from "./components/AddPost";
import EditPost from "./components/EditPost";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ListUsers />}></Route>
        <Route exact path="/add-contact" element={<AddUser />}></Route>
        <Route exact path="/add-post" element={<AddPost />}></Route>
        <Route path="/edit-contact/:id" element={<EditUser />}></Route>
        <Route path="/edit-post/:id" element={<EditPost />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
