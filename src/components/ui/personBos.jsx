import React from "react";
import personImg from "../../assets/81e6760bf2d30fbba3e24c65f7f345497900298d.png";

const PersonBox = ({ name, des }) => {
  return (
    <div className="px-4 py-2 shadow rounded-xl bg-white flex items-center gap-2 ">
      <img
        src={personImg}
        alt="personImg"
        className="w-15 border-2 border-yellow-600 h-15 rounded-full"
      />
      <div className="">
        <h1 className="font-medium text-gray-600">{name}</h1>
        <p className="text-xl font-bold">{des}</p>
      </div>
    </div>
  );
};

export default PersonBox;
