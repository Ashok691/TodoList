// import React from 'react'
// import ListItem from './ListItem'
// import './List.css'



// // function List() {
// //   return (
// //     <div className='list-container'>
// //       <ListItem key={todos[0].id} text = {todos[0].text} isCompleted={todos[0].isCompleted}/>
// //     </div>
// //   )
// // }

// // export default List

// function List(props) {
   
//   // here we are just calling the props from App.js. But instead that in the return statement we can directly write props.todos
//   // const [todos, setTodos] = React.useState(props.todos)

//   return (
//     <div className='list-container'> 

//     {/* dynamic rendering */}
//       {props.todos.map(todo =>(
//         <ListItem text = {todo.text}/>
//       ))}

//         {/* Normal or hardcode rendering and above one is dynamic rendering */}
//       {/* <ListItem text = {todos[0].text}/>
//       <ListItem text = {todos[1].text}/>
//       <ListItem text = {todos[2].text}/>
//       <ListItem text = {todos[3].text}/> */}
//     </div>
    
//   )
// }

// export default List

import React, {useState, useEffect} from 'react'
import ListItem from './ListItem'
import './List.css'



// function List() {
//   return (
//     <div className='list-container'>
//       <ListItem key={todos[0].id} text = {todos[0].text} isCompleted={todos[0].isCompleted}/>
//     </div>
//   )
// }

// export default List


// Above one is description

const Local_Storage_Key = 'react-app-acciojob-todos'

function List() {

  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    const storedTodos = JSON.parse(localStorage.getItem(Local_Storage_Key));
    if(storedTodos) setTodos(storedTodos)
  },[]);

  useEffect(()=>{
    if(todos.length > 0)
    localStorage.setItem(Local_Storage_Key, JSON.stringify(todos))
  }, [todos]);

  function deleteItem(id){
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  // todo input
  const [todoInput, setTodoInput] = useState('')
  const handleInput = (e) =>{
    setTodoInput(e.target.value);
    console.log('todoinput', todoInput);
  }

  // useEffect(()=>{
  // }, [todoInput])

  const handleSubmit = (e)=>{
    if(todoInput == '') return;
    setTodos(
      [{
        id:Math.random()*100000,
         text:todoInput},
         ...todos ])
    setTodoInput("")
  }


  return (
    <div className='list-container'> 

    
      {/* TODO form */}

      <div className='todo-input-form'>
        <input type = "text" placeholder='Add ToDo' onChange={handleInput} value={todoInput}/>
        <button onClick={handleSubmit}>Add ToDo</button>
      </div>
      

    {/* dynamic rendering */}
      {todos.map(todo =>(
        <ListItem text = {todo.text} id = {todo.id} deleteItem={deleteItem}/>
      ))}

    </div>
    
  )
}
export default List