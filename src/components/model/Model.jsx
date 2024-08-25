import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import "./Model.scss";

const Model = ({ children, setToggle }) => {
  return (
    <>
      <div className="model">
        <IoCloseSharp
          onClick={() => setToggle(false)}
          className="model__icon"
        />
        {children}
      </div>
      <div onClick={() => setToggle(false)} className="overflow"></div>
    </>
  );
};

export default Model;
