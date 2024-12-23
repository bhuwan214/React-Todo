const localTodo ="reactTodo";

export  const getLocalStorageData =()=>{

    const rawTodos=localStorage.getItem(localTodo);
    if (!rawTodos)return [] ;
    return JSON.parse(rawTodos);
  }

  export const setLocalStorageData=(task)=>{
  return  localStorage.setItem(localTodo, JSON.stringify(task));

  }