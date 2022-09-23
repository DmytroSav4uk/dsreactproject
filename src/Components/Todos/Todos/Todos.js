import Todo from "../Todo/Todo";
import {getTodos} from "../../../Services/axios.service";
import {useEffect, useState} from "react";

export default function Todos (){
    const [todos, setTodos] = useState([])

useEffect(()=>{
    getTodos().then(({data}) => setTodos(data))
},[])

    return(

        <div>
            {todos.map(todo => <Todo key = {todo.id} title={todo.title}  completed={todo.completed} />)}
        </div>)}