import { useState } from "react";
import Stopwatch from "../watch/Stopwatch";
import StatusBar from "../statusBar/StatusBar";

function Layout({ children, scene, types}) {
  const [col, setCol] = useState(1);
 
  function handleCol() {
    if (col == 3) {
      setCol(1);
    } else {
      setCol(col + 1);
    }
  }
  return (
    <>
    <div className = "flex flex-row gap-4">
      {<button onClick={handleCol}>{col}</button>}
      <Stopwatch scene = {scene} />
      <StatusBar types={types} />
      </div>
      {col == 1 && <div className={`grid gap-4 grid-cols-1 justify-start overflow-x-auto pt-4 items-center w-full`}>
        {children}
      </div>}
      {col == 2 && <div className={`grid gap-4 grid-cols-2 justify-start overflow-x-auto pt-4 items-center w-full`}>
        {children}
      </div>}
      {col == 3 && <div className={`grid gap-4 grid-cols-3 justify-start overflow-x-auto pt-4 items-start w-full`}>
        {children}
      </div>}
      
    </>
  );
}

export default Layout;
