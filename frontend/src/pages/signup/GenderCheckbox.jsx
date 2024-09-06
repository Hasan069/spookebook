import React from "react";

const GenderCheckbox = () => {
  return (
    <div className="gender flex m-4 gap-5">
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text">Male </span>
          <input
            type="checkbox"
            className="h-6 w-6 border-2 border-white rounded-3xl"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text ">Female </span>
          <input
            type="checkbox"
            className="h-6 w-6 border-2 border-white rounded-3xl"
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
