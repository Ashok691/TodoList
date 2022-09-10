import React,{useState} from 'react'
import List from '../Util/List'

const bodyContainer ={
      display:'flex',
      justifyContent: 'center',
      alignItems:'center',
      backgroundColor:'#282c34',
      height:'100vh'
}
const toDoListContainer ={
          display:'flex',
          justifyContent: 'center',
          alignItems:'center',
          flexDirection:'column',
          backgroundColor:'aqua',
          borderRadius:'10px',
          width:'600px',
          boxShadow:'0 0 10px rgba(255,255,255,.5',
}

// This is normal variable and it won't be updated while new itm added
// const todos =[
//   {
//     id:1,
//     text:'Learn React',
//     isCompleted: false
//   },
//   {
//     id:2,
//     text:'Learn Node',
//     isCompleted: false
//   },
//   {
//     id:3,
//     text:'Learn MongoDB',
//     isCompleted: false
//   },
//   {
//     id:4,
//     text:'Learn Express',
//     isCompleted: false
//   },
// ]

// State variable
// const [todos, setTodos] = useState([
//     {
//       id:1,
//       text:'Learn React',
//       isCompleted: false
//     },
//     {
//       id:2,
//       text:'Learn Node',
//       isCompleted: false
//     },
//     {
//       id:3,
//       text:'Learn MongoDB',
//       isCompleted: false
//     },
//     {
//       id:4,
//       text:'Learn Express',
//       isCompleted: false
//     },
// ]);

function App() {
  return (
    <div style={bodyContainer}>
      <div style={toDoListContainer}>
      <h2>Accio ToDo</h2>

      {/* List */}
      <List/>
      </div>
    </div>
  )
}

export default App
