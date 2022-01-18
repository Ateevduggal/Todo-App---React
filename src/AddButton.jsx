import React from "react";

const AddButton = (props) => {
  return (
    <>
      <button
        className="btn-primary px-3 fw-bold"
        onClick={props.onSelect}
        title="Add Item"
      >
        <i className="fas fa-plus-square"></i>
      </button>
    </>
  );
};

export default AddButton;
