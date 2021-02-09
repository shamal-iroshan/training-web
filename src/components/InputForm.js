import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { addTodo } from "../redux/actions";
import { v1 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { getUser } from "../utils/user";
import "../utils/InputFormStyle.css";

function InputForm({ user }) {
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let dispatch = useDispatch();
  return (
    <div>
      <form>
        <div className="input-container">
          <div className="top-input-container">
            <input
              type="text"
              placeholder="Title"
              id="title"
              className="txt-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onFocus={show}
            />
            <Button
              variant="contained"
              disableElevation
              id="btn-submit"
              onClick={() => {
                if (title !== "" || description !== "") {
                  dispatch(
                    addTodo({
                      id: uuid(),
                      user: getUser(),
                      title: title,
                      description: description,
                    })
                  );

                  hide();
                }
                setTitle("");
                setDescription("");
              }}
            >
              {" "}
              Submit{" "}
            </Button>
          </div>
          <textarea
            placeholder="Description"
            className="txt-description"
            id="text-area"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

// updateTitle = (e) => {
//     this.setState({
//         title: e.currentTarget.value
//     });
// }

// updateDescription = (e) => {
//     this.setState({
//         description: e.currentTarget.value
//     });
// }

// addCard = (e) => {
//     console.log(this.state.title);
//     console.log(this.state.description);

//     this.setState({
//         title: ''
//     });
//     this.setState({
//         description: ''
//     });
// }

function show() {
  let textbox = document.getElementById("title");
  let button = document.getElementById("btn-submit");
  let textarea = document.getElementById("text-area");

  textbox.classList.add("show");
  button.classList.add("show");
  textarea.classList.add("show");
}

function hide() {
  let textbox = document.getElementById("title");
  let button = document.getElementById("btn-submit");
  let textarea = document.getElementById("text-area");

  textbox.classList.remove("show");
  button.classList.remove("show");
  textarea.classList.remove("show");
}

export default InputForm;
