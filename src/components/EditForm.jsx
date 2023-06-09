import React, { useState } from "react";
import { todoContext } from "./todo";
import { useContext } from "react";

export const EditForm = (props) => {
  const {id , taskName} = props
  const {editTask} = useContext(todoContext);
  const [valu, setValue] = useState(taskName);
  const changemet = (event) => {
    setValue(event.target.value);
  };
  // const editTask = (task, id) => {
  //   const todoEditingFinal = todoTask.map((todo) =>
  //     todo.id === id
  //       ? { ...todo, taskName: task, isEditing: !todo.isEditing }
  //       : todo
  //   );
  //   setTodoTask(todoEditingFinal);
  // };
  const handleSubmit = (e) => {
    e.preventDefault();

    editTask(valu, id);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" new-item-form d-flex justify-content-center g-1"
    >
      <input
        value={valu}
        placeholder="modifier"
        onChange={changemet}
        type="text"
        id="item"
      />
      <button className=" gtr">update</button>
    </form>
  );
};
