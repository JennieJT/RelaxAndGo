import React, { useState } from 'react';
import GolfCourseSharpIcon from '@mui/icons-material/GolfCourseSharp';
import EditRoadSharpIcon from '@mui/icons-material/EditRoadSharp';

interface TaskCardProps {
  goal?: string;
  path?: string[];
  status?:boolean;
}

const TaskCard: React.FC<TaskCardProps> = ({ goal = "Set Up & Appreciate your goal", path = ["Set up & visualize your path"], status = false }) => {
    const[complete, setComplete] = useState(status);
    function handleSuccess(){
        setComplete(true);
    }
  return (
    <div className={`h-full w-full border border-slate-200 flex flex-col ${complete && "bg-green-200"}`}>
      <div className = "flex flex-row gap-4 justify-start">
      <div className="wx-2">
        <GolfCourseSharpIcon /> Goal
      </div>
      <div className="wx-2 ps-2">{goal}</div>
      </div>
      {!complete && <>
      <div className="w-full wx-2 ps-4 text-lg">
        <EditRoadSharpIcon /> Path
      </div>
      <div className="w-full wx-2 ps-6 text-slate-500">
        {path.map((p, index) => (
          <div key={index} className="hover:cursor-pointer">{p}</div>
        ))}
      </div>
      </>}
      {!complete && <button onClick={handleSuccess} className="wx-2 w-4/5 py-1 my-2">Success😉</button>}
      {complete && <div className = "font-serif ps-2">Yayyy you've made it! 🥳</div>}
    </div>
  );
};

export default TaskCard;
