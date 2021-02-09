import React from "react";
import Button from "@material-ui/core/Button";
import "../utils/DiaryCardStyle.css";

const MAX_LENGTH = 100;

function DiaryCard({ todo }) {
  return (
    <div className="card">
      <h1 className="title">{todo.title}</h1>
      <h2 className="subtitle">{todo.user}</h2>
      {/* <p>{todo.description}</p> */}
      <div>
        {todo.description.length > MAX_LENGTH ? (
          <div>
            <p>
              {`${todo.description.substring(0, MAX_LENGTH)} ...`} <br />{" "}
              <Button id="btn-showmore">Show more</Button>
            </p>
          </div>
        ) : (
          <p>{todo.description}</p>
        )}
      </div>
    </div>
  );
}

export default DiaryCard;
