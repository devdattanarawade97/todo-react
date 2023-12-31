


import React, { useState } from "react";
import store from "../Store/store";
import { useSelector } from "react-redux";
import todoLogo from './todoLogo.png'

function TodoApp() {



    const todo = useSelector((state) => state.todos)
    const [input, setInput] = useState('');



    function getInput(e) {

        let inputVal = e.target.value.trim();

        //   console.log(inputVal);
        setInput(inputVal);

    }


    function addTodo(e) {

        e.preventDefault();
        if (input !== '') {

            store.dispatch.todos.addTask(input);

            setInput('');
        }
        // const state = store.getState().todos;
        // state.forEach((x) => {
        //     console.log(x);
        // });

    }


    //  console.log('todos are ' + todo);

    function deleteTodo(id) {

        store.dispatch.todos.clearTask(id)

    }

    function completeTodo(id) {

        document.getElementById(id).classList = "bg-success-subtle px-5 p-2 m-2 text-decoration-line-through"
    }
    return (

        <div>


            <nav class='bg-warning'>
                <nav class='navbar-brand text-center p-3 fs-1 fw-bold'>
                    <img src={todoLogo} alt="img" height='100' width='100'></img> Todo App</nav>
            </nav>

            <div class="d-flex justify-content-center m-3">
                <form class=" col-4">
                    <input type="text" name="task" title="todo-title" value={input} id="todo-id" placeholder="add your taks" class="text-center p-2 m-2 d-block form-control" onChange={getInput} />

                    <button class="btn btn-primary p-2 m-2 " id="add" onClick={addTodo} type="submit">add</button>


                </form>


            </div>

            <ul className="" class='d-flex justify-content-center flex-column'>
                {todo.todos?.map((eachTodo, index) => {
                    return (<div className="" name={index} key={eachTodo.id} class='d-flex flex-row align-items-center align-content-center'>

                        <li class='bg-success-subtle px-5 p-2 m-2' key={eachTodo.id} id={eachTodo.id}>{eachTodo.title}</li>
                        <button class="btn btn-primary p-2 m-2" onClick={() => completeTodo(eachTodo.id)} >clear completed</button>
                        <button class='btn btn-danger p-2 m-2' onClick={() => deleteTodo(eachTodo.id)}>Delete</button>

                    </div>)
                })}
            </ul>
        </div>
    )
}

export default TodoApp;

