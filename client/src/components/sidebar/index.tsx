import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ListAltIcon from '@mui/icons-material/ListAlt';
import CodeIcon from '@mui/icons-material/Code';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import GridGoldenratioSharpIcon from '@mui/icons-material/GridGoldenratioSharp';
import { Link } from "react-router-dom"
import FlareIcon from '@mui/icons-material/Flare';

function Item({icon, name, to}){
  return (
    <>
    <div className = "py-2 rounded-md m-1 px-2 hover:bg-slate-50 flex flex-row">
    <Link className = "flex flex-row" to = {to} > {icon} <div className = "ml-2">{name} </div></Link>
    </div>
    </>
  )
}


function Sidebar() {
  return (
    <>
    <Item icon = {<GridGoldenratioSharpIcon />} name = {"Golden 4h Work"} to = {"Golden4hWork"} />
    <Item icon = {<FlareIcon />} name = {"Habit Tracker"} to = {"habit"} />
    <div className = "py-2 rounded-md m-1 px-2 hover:bg-slate-50 flex flex-row">
    <Link className = "flex flex-row" to = "knowledgeCards" > <AutoStoriesIcon /> <div className = "ml-2">Flip Cards </div></Link>
    </div>
    <div className = "py-2 rounded-md m-1 px-2 hover:bg-slate-50 flex flex-row">
    <Link className = "flex flex-row" to = "toDoLists" > <ListAltIcon /> <div className = "ml-2">To Do Lists </div></Link>
    </div>
    <div className = "py-2 rounded-md m-1 px-2 hover:bg-slate-50 flex flex-row">
    <Link className = "flex flex-row" to = "marketing" > <LocalFloristIcon /> <div className = "ml-2">Marketing </div></Link>
    </div>
    <div className = "py-2 rounded-md m-1 px-2 hover:bg-slate-50 flex flex-row">
    <Link className = "flex flex-row" to = "frontEndCoding" > <CodeIcon /> <div className = "ml-2">Front End Coding </div></Link>
    </div>
    <div className = "py-2 rounded-md m-1 px-2 hover:bg-slate-50 flex flex-row">
    <Link to = "algoCoding" className = "flex flex-row" >  <CodeIcon /> <div className = "ml-2">Algo Coding </div></Link>
    </div>
    <div className = "py-2 rounded-md m-1 px-2 hover:bg-slate-50">
    <Link className = "flex flex-row" to = "systemDesign" >  <div className = "ml-2">System Design </div></Link>
    </div>
    </>
  )
}

export default Sidebar