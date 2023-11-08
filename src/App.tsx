import React from "react";
import "./App.css";
import { UserSlice } from "./store/reducers/UserSlice";
import { useAppDispatch, useAppSelector } from "./hooks/redux";

function App() {
  const dispatch = useAppDispatch();

  return <div className="App"></div>;
}

export default App;
