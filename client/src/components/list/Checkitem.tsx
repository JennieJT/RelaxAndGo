import { useState } from "react";
import { useUpdateAlgoCompletionMutation } from "../../state/api";

interface CheckItemProps {
  item: {
    id: string;
    status:boolean;
    content: string;
  };
  children: React.ReactNode;
}

const CheckItem: React.FC<CheckItemProps> = ({ item, children}) => {
  const [status, setStatus] = useState(item.status);
  const [updateAlgoCompletion] = useUpdateAlgoCompletionMutation();

  const toggleStatus = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const newStatus = event.target.checked;
    setStatus(newStatus);
    try {
      await updateAlgoCompletion({ id: item.id, status: newStatus }).unwrap();
    } catch (error) {
      console.error('Failed to update the completion status', error);
      setStatus(!newStatus); // Revert the status in case of an error
    }
  };

  return (
    <div className="ps-3 w-full flex flex-row items-center leading-1">
      <input
        className="appearance-none hover:cursor-pointer w-4 h-4 bg-gray-100 border border-gray-300 rounded focus:ring-green-200 checked:bg-green-200 checked:border-transparent"
        type="checkbox"
        id={item.id}
        name={item.id}
        checked={status}
        onChange={toggleStatus}
      />
      <label htmlFor={item.id} className="ml-2 w-full">
        {children ? children : item.content}
      </label>
    </div>
  );
};

export default CheckItem;
