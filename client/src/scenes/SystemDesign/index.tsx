import { useEffect, useState } from "react";
import DopaBox from "../../components/dopaBox";
import InfoBar from "../../components/InfoBar";
import Layout from "../../components/layout";
import TaskCard from "../../components/TaskCard";
import KnowledgeCards from "../KnowledgeCards";

function SystemDesign() {
    const [complete, setComplete] = useState(0);

    const handleSetComplete = () => {
        setComplete((cur) => cur + 1);
    };

    useEffect(() => {
        // This effect will run whenever `complete` changes
        console.log('Complete state has changed:', complete);
    }, [complete]);

    const SYSTEM = {
        value: "news feed",
        children: [
            {
                value: "Requirements",
                children: [
                    { value: "User", children: "" },
                    { value: "Post", children: "" },
                    { value: "Posts (Lazy Loading)", children: "" },
                ],
            },
            { value: "Architecture", children: "" },
            { value: "Data Model", children: "" },
            { value: "Interface", children: "" },
            { value: "Optimization", children: "" },
        ],
    };

    return (
        <>
        <Layout scene = "SystemDesign">
                 <div className="border border-green-400 rounded-md flex flex-col gap-1 p-2 w-full">
                    <div className="w-full text-center bg-slate-200 text-lg py-2">
                        {SYSTEM.value}
                    </div>
                    <div className="w-full text-center h-full">
                        ANSWER
                    </div>
                    <div className="align-bottom h-10 w-full flex justify-end">
                        {(complete < 1) && <div onClick={handleSetComplete} className="h-10 w-10 rounded-sm items-center justify-center flex hover:bg-green-200 hover:cursor-pointer" > +1 </div>}
                    </div>
                
                </div>
                <div className="border border-green-400 rounded-md p-2 flex flex-col">
                    <div className="w-full text-center text-lg py-2 bg-slate-200">
                        What I've learned
                    </div>
                    <div className="w-full text-center h-full">
                        ANSWER
                    </div>
                    <div className="align-bottom h-10 w-full flex justify-end">
                    {(complete < 2) && <div onClick={handleSetComplete} className="h-10 w-10 rounded-sm items-center justify-center flex hover:bg-green-200 hover:cursor-pointer" > +1 </div>}
                    </div>
                </div> 
        </Layout>
        </>
    );
}

export default SystemDesign;
