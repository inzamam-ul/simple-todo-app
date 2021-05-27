import React, { useState } from "react";
import { Container } from "react-bootstrap";
import AddToDo from "./AddToDo";
import SingleToDo from "./SingleToDo";

const ToDo = () => {
  const [toDoList, setToDoList] = useState([]);
  const deleteToDo = (title) => {
    let newList = toDoList.filter((todo) => todo.title !== title);
    setToDoList(newList);
  };
  return (
    <div>
      <AddToDo toDoList={toDoList} setToDoList={setToDoList} />
      <Container className="my-4">
        <hr className="my-3 bg-success" />
        <h3>Your Notes</h3>
        <hr className="bg-success" />

        <div className="row my-3" id="notes">
          {toDoList?.length ? (
            toDoList.map((toDo, index) => (
              <SingleToDo key={index} deleteToDo={deleteToDo} data={toDo} />
            ))
          ) : (
            <h5 className="mx-auto">No todo available</h5>
          )}
        </div>
      </Container>
    </div>
  );
};

export default ToDo;
