import { useEffect ,useState} from "react";

export const TodoDate =()=>{

    const [dateTime,setDateTime]=useState("");


  useEffect(()=>{

    const interval =setInterval(()=>{
      const now =new Date();
      const formattedDate =now.toLocaleDateString();
        const formatteTime =now.toLocaleTimeString();
        setDateTime(formattedDate+" - "+formatteTime);  
        },1000);

        return ()=> clearInterval(interval);
  },[]);

    return <h3 className="date-time">{dateTime}</h3>


}