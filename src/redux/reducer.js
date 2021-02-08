import { ADD_TODO } from './actions';
import { todos } from './states';

export let reducer = (state = todos, action) => {
    let newToDos;
    switch (action.type) {
        case ADD_TODO:
            newToDos = [...state];
            newToDos.push(action.payload);
            return newToDos;
    }
    return state;
}