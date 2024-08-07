import { useState } from "react";

function DopaBox({cur = 0, split = 1}) {
    const[complete, setComplete] = useState(cur);
    function completeTask(){
        setComplete((c) => c+1)
    }
  return (
    <>
        <div className="w-6 h-6 border border-green-200 rounded-md hover:cursor-pointer flex flex-row" >
            {
                Array.from(Array(split)).map((_, index)=>
                    <div onClick = {completeTask} className = {`flex-1 h-full ${complete> index ? "bg-green-200":""}`}></div>
                )
            }
        </div>
    </>
  );
}

export default DopaBox;
