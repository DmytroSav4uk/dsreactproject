import Todo from "../Todo/Todo";
import {getTodos} from "../../../Services/axios.service";
import {useEffect, useState} from "react";
import css from "../../CSS/components.module.css"

export default function Todos (){
    const [todos, setTodos] = useState([])

useEffect(()=>{
    getTodos().then(({data}) => setTodos(data))
},[])

    return(

        <div className={css.elements}>
            {todos.map(todo => <Todo key = {todo.id} title={todo.title}  completed={todo.completed} />)}
        </div>)}