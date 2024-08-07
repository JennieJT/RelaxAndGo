import React, { useState } from "react";

const HABITS = ["HEALTH", "CODE", "EAT", "TALK"];
const data = [
    {type: "HEALTH", title: "Yoga", times:1, color:'bg-orange-300'},
    {type: "HEALTH", title: "Fitness", times:2, color:'bg-purple-400'},
    {type: "EAT", title: "Popeyes", times:2, color:'bg-orange-300'},
    {type: "TALK", title:"Jimmie", times:1, color:'bg-pink-200'}
]

function Habits() {
  const [range, setRange] = useState("days");
  const toggleRange = (range) => {
    setRange(range);
  };
  return (
    <div className="p-2 w-full h-full">
      <div className="flex flex-row gap-1 pb-1">
        <div
          onClick={() => toggleRange("days")}
          className={`${
            range == "days" && "bg-slate-200"
          } rounded-md px-2 hover:cursor-pointer`}
        >
          Days
        </div>
        <div
          onClick={() => toggleRange("weeks")}
          className={`${
            range == "weeks" && "bg-slate-200"
          } rounded-md px-2 hover:cursor-pointer`}
        >
          Weeks
        </div>
        <div
          onClick={() => toggleRange("months")}
          className={`${
            range == "months" && "bg-slate-200"
          } rounded-md px-2 hover:cursor-pointer`}
        >
          Months
        </div>
        <div
          onClick={() => toggleRange("years")}
          className={`${
            range == "years" && "bg-slate-200"
          } rounded-md px-2 hover:cursor-pointer`}
        >
          Years
        </div>
      </div>
      <div className="flex flex-row flex-wrap py-2 gap-4">
        {HABITS.map((habit, index) => (
          <div
            key={index}
            className="border rounded-md w-full flex flex-row gap-2"
          >
            <div className="min-w-20 min-h-10 ps-1 flex justify-center items-center border-r border-slate-200">
              {habit}
            </div>
            <div className="flex flex-row flex-wrap gap-2 items-center h-fit p-1">
              {data
              .filter((d) => d.type === habit)
              .sort((a,b) => b.times - a.times)
              .map((item, index)=>
                <div key={index} className={`flex items-center rounded-md text-xs px-1 ${item.color}`}>
                  {item.title} {item.times}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Habits;
