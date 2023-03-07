import React from "react";
import TodoList from "./components/TodoList"

export function App() {
 return ( 
<>
    <div>Hola mundo!!!</div>
    <TodoList todos={[{
        id: 1,
        task: 'Tarea 1',
        completed: false
    }]}/>
</>
 )   
}