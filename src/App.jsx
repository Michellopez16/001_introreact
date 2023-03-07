import React, {useState, useRef} from "react";
import TodoList from "./components/TodoList"
import { v4 as uuidv4} from "uuid";
// Añadir el manejador al boton onclick(handleTodoAdd) 
// UseRef
// instalamos una libreria  con para geenerar id de manera
// aleatoria
// yarn add uuid 
// lo importamos
export function App() {
 const [todos,setTodos] = useState([
    {id: 1,task: 'Tarea 1',completed: false}])
 
    const todoTaskRef = useRef();

    const handleTodoAdd = () =>{
        const task = todoTaskRef.current.value;
        if ( task === "") return;
        // setTodos necesita el estado previo y el nuevo
        setTodos( (prevTodos) => {
            return [...prevTodos, {id: uuidv4,task,completed: false}];
        } )
    }

return ( 
<> 
    <div>Hola mundo!!!</div>
    <TodoList todos={todos}/>
    <input ref={todoTaskRef} type="text" placeholder="Nueva Tarea"/>
    <button onClick={handleTodoAdd}>➕</button>
    <button>🗑</button>
</>
 )
 
}