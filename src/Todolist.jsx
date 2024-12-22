import { MdDeleteForever } from "react-icons/md";
import { FaRegCheckCircle ,FaRegCircle } from "react-icons/fa";


export const TodoList =({data,checked,onHandleDeleteTodo,onHandleCheckedTodo})=>{

    return(
        <li className="todo-item">
        <span > 
                   <button className="check-btn" onClick={()=>onHandleCheckedTodo(data)}> 
                    {checked ?<FaRegCheckCircle />:<FaRegCircle />}

                    </button> 
              <span className={checked ? "checkList" :"notCheckList"}>  {data}</span> 
        </span>
        <button
         className="delete-btn"
         onClick={()=>onHandleDeleteTodo(data)}
         ><MdDeleteForever className="delete-icon" />  
           </button>
      </li>
    )
}