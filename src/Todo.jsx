import {  useState } from "react"
import { TodoForm } from "./Todoform";
import { TodoList } from "./Todolist";
import "./Todo.css"
import { TodoDate } from "./TodoDate";

export default function Todo() {

    const [task,setTask]=useState([]);

    const handleFormSubmit=(inputValue)=>{
      
      const { id, content, checked }=inputValue;

      //To check if the input field is empty or not
      if(!content)return;

      //To check if data is already exist or not
      if(task.includes(inputValue))return;

      const ifTodoContentMatched =task.find(
        (curTask)=>curTask.content ===content
      );

      if(ifTodoContentMatched)return;

      setTask((prevTask)=>[...prevTask,{id, content , checked}

      ]);
      
    };

  //Todo Delete handleDeleteTodo function
  const handleDeleteTodo =(value)=>{

    const updateTask = task.filter((curTask)=> curTask.content!==value)
    setTask(updateTask);

  }
 
  const handleclearTodoData=()=>{
    setTask([]);
  }

const handleCheckTodo =(content)=>{

  const updateTask = task.map((curTask)=>{
  
    if(curTask.content === content){
      return {...curTask, checked : !curTask.checked}
    }
    else{
      return curTask;
    }
    
  })

  setTask(updateTask )

}
    
 


  return (
   
<section className="todo-container">
    <div className="todo-content">
 <header>
 <h1>Todo List</h1>
 <TodoDate/>
 </header>
<TodoForm onAddTodo={ handleFormSubmit}/>
 </div>
 <section className="todo-list">
  <ul>{
    task.map((curTask) => {
      return( <TodoList
        key={curTask.id} 
        data={curTask.content}
        checked={curTask.checked}
      onHandleDeleteTodo ={handleDeleteTodo}
      onHandleCheckedTodo ={handleCheckTodo}
       />);
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
