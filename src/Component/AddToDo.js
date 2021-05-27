import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddToDo = ({ setToDoList, toDoList }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    let newList = [...toDoList, data];
    setToDoList(newList);
    e.target.reset();
  };

  return (
    <Container className="text-left">
      <h1 className="my-3">Welcome to TO DO</h1>
      <div className="row my-3">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Title</label>
                  <input
                    className="form-control"
                    id="title"
                    placeholder="Enter Title"
                    {...register("title", { required: true })}
                  />

                  {errors.title && <span>This field is required</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                    Add a Note
                  </label>
                  <textarea
                    className="form-control"
                    id="addTxt"
                    placeholder="Write Your Description Here"
                    {...register("description", { required: true })}
                  />

                  {errors.description && <span>This field is required</span>}
                </div>

                <button className="btn btn-primary" type="submit">
                  Add TO-DO
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AddToDo;
