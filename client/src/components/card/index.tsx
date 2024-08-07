import React, { useState } from "react";

interface CardProps {
  knowledgeNode: {
    id: string;
    title: string;
    content: string;
    times:number;
    complete:number;
    status:boolean;
    type:string[];
  };
}

const Card: React.FC<CardProps> = ({ knowledgeNode }) => {
  console.log(JSON.stringify(knowledgeNode))
  const [backPage, setBackPage] = useState(false);
  const togglePage = () => setBackPage(!backPage);
  const [success, setSuccess] = useState(false);
  function toggleSuccess(){
    setSuccess(!success);
  }

  return (
    <div>
      {backPage ? (
        <div
          onClick={togglePage}
          className={`shadow-md border border-slate-100 p-4 content-center text-center flex flex-col justify-between rounded-lg hover:cursor-pointer`}
        >
          <div className="overflow-y-auto custom-scroll">
            {knowledgeNode.content? knowledgeNode.content : "😘"}
          </div>
          <button className = "w-full" onClick={toggleSuccess}>SUCCESS!🥳</button>
        </div>
      ) : (
        <div
          onClick={togglePage}
          className={`shadow-md ${success && 'bg-green-200'} text-pretty border border-slate-100 p-4 content-center text-center flex flex-col justify-between rounded-lg hover:cursor-pointer`}
        >
          <div className="max-h-40">{knowledgeNode.title}</div>
        </div>
      )}
      <style>{`
        .custom-scroll::-webkit-scrollbar {
          width: 0px;
          height: 0px; 
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background-color: #a0aec0; 
          border-radius: 10px; 
        }
        .custom-scroll::-webkit-scrollbar-thumb:hover {
          background-color: #718096; 
        }
      `}</style>
    </div>
  );
};

export default Card;
