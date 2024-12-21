import { useEffect, useState } from "react"
import { MdDeleteForever } from "react-icons/md";

import "./Todo.css"

export default function Todo() {

    const [inputValue,setInputValue]=useState("");
    const [task,setTask]=useState([]);
    const [dateTime,setDateTime]=useState("");

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

  //Date and Time

  useEffect(()=>{

    const interval =setInterval(()=>{
      const now =new Date();
      const formattedDate =now.toLocaleDateString();
        const formatteTime =now.toLocaleTimeString();
        setDateTime(formattedDate+" - "+formatteTime);  
        },1000);

        return ()=> clearInterval(interval);
  },[]);

  //Todo Delete handleDeleteTodo function

  const handleDeleteTodo =(value)=>{

    const updateTask = task.filter((curTask)=> curTask!==value)
    setTask(updateTask);

  }
 
  const handleclearTodoData=()=>{
    setTask([]);
  }

    
 


  return (
   
<section className="todo-container">
    <div className="todo-content">
 <header>
 <h1>Todo List</h1>
 <h3 className="date-time">{dateTime}</h3>
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
        <button
         className="delete-btn"
         onClick={()=>handleDeleteTodo(curTask)}
         ><MdDeleteForever className="delete-icon" />  
           </button>
      </li>
    })
    }
  </ul>
 </section>
 <section>
  <button className="clear-btn"
  onClick={handleclearTodoData }
  >
    Clear all
  </button>
 </section>
 
    </section>
    
  )
}
