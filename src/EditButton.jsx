import React from "react";

const EditButton = (props) => {
  return (
    <>
      <button
        className="btn-secondary text-white px-3 fw-bold"
        onClick={props.onSelect}
        title="Update Item"
      >
        <i className="fas fa-sync-alt"></i>
      </button>
    </>
  );
};

export default EditButton;
