import React, { useState, useContext } from "react";
import "../../styles/home.css";
import Card from "../component/Card";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);
  console.log(store);
  //actions.verPersona(id)
  return (
    <div className="mt-5 container">
      <div className="overflow-x">
        <h1 className="text-danger">Characters</h1>
        <div className=" d-flex">
          <Card className="col-3" />
          <Card className="col-3" />
          <Card className="col-3" />
          <Card className="col-3" />
          <Card className="col-3" />
          <Card className="col-3" />
          <Card className="col-3" />
        </div>
      </div>
      <h1 className="text-danger">Planets</h1>
      <Card />
    </div>
  );
};
