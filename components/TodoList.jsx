import { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([]);

  function addTask() {
    const inputValue = document.querySelector("#inputId").value;

    if (inputValue == "") {
      alert("Add Task Please!");
    } else {
      setTasks(t => [...t, inputValue]);
      document.querySelector("#inputId").value = "";
    }
  }

  function removeTask(index) {
    setTasks([...tasks.filter((_, i) => i != index)]);
  }

  function moveUpTask(index) {
    const moveUpTask = [...tasks];

    if (index > 0) {
      [moveUpTask[index], moveUpTask[index - 1]] = [
        moveUpTask[index - 1],
        moveUpTask[index],
      ];
      setTasks(moveUpTask);
    }
  }

  function moveDownTask(index) {
    const newDownTask = [...tasks];

    console.log(newDownTask.length);
    console.log(index + " index");

    if (index < newDownTask.length - 1) {
      [newDownTask[index], newDownTask[index + 1]] = [
        newDownTask[index + 1],
        newDownTask[index],
      ];
      setTasks(newDownTask);
    }
  }

  return (
    <div className="container">
      <h1>To-Do-List</h1>
      <div>
        <input type="text" placeholder="Entre A Text ..." id="inputId" />
        <button className="btn btn-add" onClick={addTask}>
          Add
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => {
          return (
            <div className="list-container" key={index}>
              <li key={index}>{task}</li>
              <div>
                <button
                  className="btn btn-delete"
                  onClick={() => removeTask(index)}
                >
                  Delete
                </button>
                <button
                  className="up-btn btn"
                  onClick={() => moveUpTask(index)}
                >
                  👆
                </button>

                <button
                  className="down-btn btn"
                  onClick={() => moveDownTask(index)}
                >
                  👇
                </button>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
