import React,{useState} from 'react'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
uuidv4();

const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    const addTodo = (todo) =>{ // to set todos we need to make a copy of cuurrent todos
        setTodos([...todos, {id: uuidv4(), task:todo, completed:false, isEditing: false}]) //what we need to do to make a copy of the current state, for that we use the spread operator([...todos])
        console.log(todos)
    }

  return (
    <div className='TodoWrapper'>
      <TodoForm addTodo={addTodo}/>
    </div>
  )
}

export default TodoWrapper
