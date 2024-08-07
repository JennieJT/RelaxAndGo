import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

function HLeftTitle({ children, open = true, onClick = () => {}, next = null }) {
  const [openSub, setOpenSub] = useState(false);
  const toggleOpen = () => {
    setOpenSub(!openSub);
  };
  return (
    <>
      <div className="bg-slate-50 py-1 ps-2 my-1 text-left flex flex-row">
        <div className="h-6 w-6 rounded-sm hover:cursor-pointer">
          {openSub ? (
            <ExpandMoreIcon
              className=" hover:bg-slate-100"
              onClick={toggleOpen}
            />
          ) : (
            <ChevronRightIcon className="rounded-sm" onClick={toggleOpen} />
          )}
        </div>
        <div className="ps-1">{children}</div>
      </div>
      {openSub && next}
    </>
  );
}

export default HLeftTitle;
