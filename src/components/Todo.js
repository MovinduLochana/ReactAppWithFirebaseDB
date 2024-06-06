import React from 'react';
import firebase from "../firebase"
;
export default function Todo({ todo }){

    const handleDelete = () =>{
        const todoRef = firebase.database().ref("Todo").child(todo.id);
        todoRef.remove()
    }

    const handleUpdate = () =>{
        const todoRef = firebase.database().ref("Todo").child(todo.id);
        todoRef.update({
            complete : !todo.complete
        });
    }
    return(
        <div>
            <h1>{todo.title}</h1>

            <button onClick={handleDelete} className="btn btn-danger">
                Delete
            </button>

            <button onClick={handleUpdate} className={todo.complete ? "btn btn-warning ml-4" : "btn btn-success ml-4"}>
                {todo.complete ? "uncomplete" : "complete"}
            </button>
        </div>
    )
}