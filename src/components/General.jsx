import React from "react";
import "../styles/General.css"

function Name() {
  return (
    <label>
      NAME:
      <input></input>
    </label>
  );
}

function Email() {
  return (
    <label>
      EMAIL:
      <input></input>
    </label>
  );
}

function Phone() {
  return (
    <label>
      PHONE:
      <input></input>
    </label>
  );
}

export default function General() {
  return (
    <>
    <h2>General Information</h2>
    <div className="general">
      <Name />
      <Email />
      <Phone />
    </div>
    </>
  );
}
