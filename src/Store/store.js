
import { init } from '@rematch/core'


const INTIAIL_STATE = {

    todos: []
}

const todos = {


    state: INTIAIL_STATE,
    reducers: {

        addTask: (state, title) => {
            const newTodo = {
                title,
                id: Date.now(),
                completed: false,
            };
            // console.log('added todos is '+newTodo);
            return { ...state, todos: [...state.todos, newTodo] };
        },

        clearTask: (state, id) => {

            const filteredTodos = state.todos.filter(todo => todo.id !== id)

            return { ...state, todos: filteredTodos }
        },
   



    }
}


const store = init({
    models: {
        todos,
    }
})

export default store;