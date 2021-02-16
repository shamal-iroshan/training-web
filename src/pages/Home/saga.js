import {
  call,
  takeEvery, // select, take were removed
} from "redux-saga/effects";
import { firestore } from "./firbase";
import { ADD_TODO } from "./actions";

async function addtodoAsync(todo) {
  const docref = firestore.collection("posts").doc();
  await docref.set(todo);
}

export function* add_todo(action) {
  try {
    yield call(addtodoAsync, action.payload);
    console.log("success");
  } catch (e) {
    console.log(e.message);
  }
}

// Individual exports for testing
function* setAddToDoSagas() {
  yield takeEvery(ADD_TODO, add_todo);
}
// function* getAllAddTodoSagas() {
//   yield takeEvery()
// }
export const addToDoSagas = [setAddToDoSagas];