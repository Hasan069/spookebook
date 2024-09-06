import React from "react";

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="gender flex m-4 gap-5">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "male" ? "selected" : ""
          }`}
        >
          <span className="label-text">Male </span>
          <input
            type="checkbox"
            className="h-6 w-6 border-2 border-white rounded-3xl"
            checked={selectedGender === "male"}
            onChange={() => {
              onCheckboxChange("male");
            }}
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text ">Female </span>
          <input
            type="checkbox"
            className={`h-6 w-6 border-2 border-white rounded-3xl  ${
              selectedGender === "female" ? "selected" : ""
            }`}
            checked={selectedGender === "female"}
            onChange={() => {
              onCheckboxChange("female");
            }}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
