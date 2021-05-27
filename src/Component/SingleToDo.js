import React from "react";

const SingleToDo = (props) => {
  const { title, description } = props.data;
  const deleteToDo = props.deleteToDo;
  return (
    <div className="noteCard text-left col-sm-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <button onClick={() => deleteToDo(title)} className="btn btn-primary">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleToDo;
