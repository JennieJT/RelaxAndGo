import { useEffect, useState } from "react";
import Dialog from "../../components/dialog";
import NotesCheckbox from "../../components/notes/NotesCheckbox";
import { useGetTasksQuery } from "../../state/api";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function ToDoLists() {
  const {data, isLoading, error} = useGetTasksQuery();
  const [achievements,setAchievements] = useState(0);
  const total = 10;
  const completedTaskCount = data?.lists.reduce((sum, task) => {
    return task.completion === true ? sum + 1 : sum;
  }, 0);
  useEffect(() => setAchievements(completedTaskCount),[completedTaskCount]);

  return (
    <div>
      <div className = "flex flex-row gap-3 items-center">
      <Dialog /> 
      <div>{achievements? achievements: 0} /{total}</div>
      {Array.from(Array(total).keys()).map((index)=>index >= achievements? <FavoriteBorderIcon className = "text-green-200"/> : <FavoriteIcon className="text-green-200" />)}
      </div>
    <div className="flex flex-row gap-3">
     <NotesCheckbox name = "Relax Go Backlog😀" />
     <NotesCheckbox name = "Health" />
    </div>
    </div>
  );
}

export default ToDoLists;
