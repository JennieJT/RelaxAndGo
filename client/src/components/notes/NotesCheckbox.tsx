import React, { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import { useGetTasksQuery, useUpdateTaskCompletionMutation } from "../../state/api";

interface Task {
  id: string;
  completion: boolean;
  content: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined;
}

function NotesCheckbox({name}) {
  const { data, error, isLoading } = useGetTasksQuery();
  const [updateTaskCompletion] = useUpdateTaskCompletionMutation();
  const handleChecked = async (id: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const completion = event.target.checked;
    try {
      await updateTaskCompletion({ id, completion });
    } catch (error) {
      console.error('Failed to update task completion', error);
    }
  };
  //filter item with same name.
  const lists = data?.lists.filter(list =>  list["type"].includes(name));
  return (
    <ul className="min-w-48 h-fit text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
      <h3 className="text-center py-2 bg-green-200">{name}</h3>
      <div>{isLoading ? "Loading..." : ""}</div>
      {lists?.map((list: Task, index: number) => (
        <li key={list.id} className="w-full py-1 text-sm font-medium text-gray-900 border-b">
          <div className="ps-3 py-2 w-full flex flex-row">
            <div>
              <input
                className="appearance-none hover:cursor-pointer w-4 h-4 bg-gray-100 border border-gray-300 rounded focus:ring-green-200 checked:bg-green-200 checked:border-transparent"
                type="checkbox"
                id={list.id}
                name={list.id}
                checked={list.completion}
                onChange={(e) => handleChecked(list.id, e)}
              />
              <label htmlFor={list.id} className="ml-2">
                {list.content}
              </label>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default NotesCheckbox;
