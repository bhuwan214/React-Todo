import { useState } from "react"
import { MdDeleteForever } from "react-icons/md";

import "./Todo.css"

export default function Todo() {

    const [inputValue,setInputValue]=useState("");
    const [task,setTask]=useState([]);


    const handleInputChange=(value)=>{
      setInputValue(value);
    };

    const handleFormSubmit=(event)=>{
      event.preventDefault();
      
      if(!inputValue)return;

      if(task.includes(inputValue)) { 
        setInputValue("");
        return;
      }
      setTask((prevTask)=>[...prevTask,inputValue]);
      
      setInputValue("");
    };


  return (
   
<section className="todo-container">
    <div className="todo-content">
 <header>
 <h1>Todo List</h1>
 </header>
 <section className="form">
    <form onSubmit={handleFormSubmit} >
        <div>
            <input
             type="text" 
             className="todo-input " 
             autoComplete="off" 
             value={inputValue}
             onChange={(event)=>handleInputChange(event.target.value)}
             />
        </div>
        <div> 
            <button type="submit" className="todo-btn">Add Task</button>
        </div>
    </form>
 </section>
 </div>
 <section className="todo-list">
  <ul>{
    task.map((curTask,index) => {
      return <li key={index}>
        <span>{curTask}</span>
        <button className="delete-btn"><MdDeleteForever />    </button>
      </li>
    })
    }
  </ul>
 </section>
 
    </section>
    
  )
}
