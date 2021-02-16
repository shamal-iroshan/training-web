export const ADD_TODO = "ADD_TODO";
export const GET_TODO = "GET_TODO";

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo,
  };
}

export function getTodo(todo) {
  return {
    type: GET_TODO,
    payload: todo,
  }
}
