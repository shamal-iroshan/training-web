import React from "react";
import Button from "@material-ui/core/Button";
import "../utils/DiaryCardStyle.css";

const MAX_LENGTH = 100;

function DiaryCard({todo}) {
    return (
        <div className="card">
            <h1 className="title">{todo.title}</h1>
            <h2 className="subtitle">{todo.user}</h2>
            {/* <p>{todo.description}</p> */}
            <div>
                {todo.description.length > MAX_LENGTH ? (
                    <div>
                        <p id="txt-description">
                            {`${todo.description.substring(0, MAX_LENGTH)} ...`}
                        </p>
                        <Button id="btn-showmore" onClick={showText(todo)}>Show more</Button>
                    </div>
                ) : (
                    <p>{todo.description}</p>
                )}
            </div>
        </div>
    );
}

function showText(todo) {
    let desc = document.getElementById('txt-description');
    if (desc != null) {
        desc.value = todo.description;
    }
}

export default DiaryCard;
