import { ADD_TODO } from "./actions";
import produce from "immer";

const initState = {
  todos: [],
};

export let reducer = (state = initState, action) => {
  let newToDos;

  return produce(state, (draft) => {
    switch (action.type) {
      case ADD_TODO:
        newToDos = [...draft.todos];
        newToDos.push(action.payload);
        draft.todos = newToDos;
    }
  });
};
