import { useEffect, useState } from "react";

function SomeList(){
    const [counter,setCounter] = useState(0);
    useEffect(()=>{
        console.log(counter)
    },[counter])

    return(
        <div>
            <button onClick={()=>{setCounter(counter+1)}}>onClick</button>
        </div>
    )
}

export default SomeList;