//https://www.youtube.com/watch?v=LoYbN6qoQHA
import React,{useState} from 'react'

const TodoForm = ({addTodo}) => {
    const [value,setvalue]=useState('')

    const handleSubmit = (e) =>{
        e.preventDefault(); //preventDefault() prevents the default action
        
        if(value){
            console.log(value);
            addTodo(value);
            setvalue(""); //to clear the input field after submitting
            
        }
        
    }

  return (
    //we need to add a function that captures the value of the state when we submit the form. For that we add an event onSubmit and we make it equal to {handlesubmit}
    <form className='TodoForm' onSubmit={handleSubmit}>
        {/* //In onchange instead of calling the handleEvent function,we are going to call in an arrow function and pass in an event, the below statement console logs each value that we type in the input field for every keystroke*/}
        {/* <input type='text' className='todo-input' placeholder='what is the task today?' onChange={(e)=>{console.log(e.target.value)}}/>  */}
        
        <input type='text' className='todo-input' value={value} placeholder='what is the task today?' onChange={(e)=>{setvalue(e.target.value)}}/> 

        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}

export default TodoForm
