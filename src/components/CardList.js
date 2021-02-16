import React from "react";
import Card from "./DiaryCard";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect, withFirebase } from "react-redux-firebase";
import "../utils/DiaryHomeStyle.css";

function CardList({ todos, todoSnaps }) {

  if (!todoSnaps) {
    return (
      <div>
        <h1 style={{ color: "white" }}>Loading</h1>
      </div>
    );
  }
  return (
    <div className="card-container">
      {todoSnaps.map((dat) => {
        return <Card key={dat.id} todo={dat} />;
      })}
    </div>
  );
}

const mapStateToProps = ({ todoReducer, firestore }) => {
  return {
    todos: todoReducer.todos,
    todoSnaps: firestore.ordered["posts"],
  };
};

// export default CardList;
export default withRouter(
  compose(
    firestoreConnect(() => [{ collection: "posts" }]),
    connect(mapStateToProps, null)
  )(withFirebase(CardList))
);
