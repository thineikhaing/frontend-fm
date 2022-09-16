import React from "react";
import {
	Routes,
	Route
  } from "react-router-dom";
import Root from "./components/Root";
import Users from "./components/Users";
import NewForm from "./components/NewForm";

export default function UserRoute() {
	return (
	  <Routes>
		<Route path="/" element={<Root/>} />
		<Route path="/users" element={<Users/>} />
		<Route path="/new" element={<NewForm/>}/>
	  </Routes>
	);
  }
  