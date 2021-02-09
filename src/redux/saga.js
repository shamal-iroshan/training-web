import {
  call,
  takeEvery, // select, take were removed
} from "redux-saga/effects";
import { firestore } from "../firebase/firbase";
import { ADD_TODO } from "./actions";

async function addtodoAsync(todo) {
  const docref = firestore.collection("posts").doc();
  await docref.set(todo);
}
export function* add_todo(action) {
  try {
    yield call(addtodoAsync, action.payload);
    // yield put(loginUserSuccess(data));
    console.log("success");
  } catch (e) {
    // yield put(loginUserError(e));
    console.log(e.message);
  }
}
// Individual exports for testing
function* getAddToDoSagas() {
  yield takeEvery(ADD_TODO, add_todo);
}
export const addToDoSagas = [getAddToDoSagas];
