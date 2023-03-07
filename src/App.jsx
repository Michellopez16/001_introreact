import React, {useState} from "react";
import TodoList from "./components/TodoList"

//useState nos permite que nuestros componentes tengan estado
//El estado es una propiedad que hace que cada cambio del estado
// renderiza de nuevo el componente
// hacemos un destructuring con el nombre del estado llamado todos
// y el que modifica como setTodos
export function App() {
 const [todos,setTodos] = useState([
    {id: 1,task: 'Tarea 1',completed: false}])
 
return ( 
<> 
    <div>Hola mundo!!!</div>
    <TodoList todos={todos}/>
    <input type="text" placeholder="Nueva Tarea"/>
    <button>➕</button>
    <button>🗑</button>
</>
 )
 // Jsx solo se puede enviar un elemento antes se englobaba en un div
 // y generaba problemas react saco algo que se le llama fracment
 // 1.- <> </> version reducida
 // 2.- <React.Fragment> <React.Fragment>   
 // 3.- import React, {Fragment, useState} from "react";

 // https://es.piliapp.com/emoji/list/ 
 // para añadir emojis
}