import React from "react";

function TodoItem(props) {
  console.log(props);
  return (
    <div className="checkbox">
      <input
        type="checkbox"
        onChange={() => props.handleChange(props.item.id)}
        checked={props.item.completed}
      />
      <p>{props.item.text}</p>
    </div>
  );
}

export default TodoItem;
