import useStopwatch from "../../hooks/useStopWatch"
import DopaBox from "../dopaBox"

function InfoBar({title = "", boxNum = 5}) {
  const {FormatTime, elapsedTime} =useStopwatch(0, "total");
  return (
    <div className="flex flex-row gap-3 items-center justify-between pl-2">
      {Array.from(boxNum).map((_, index) => <DopaBox key = {index}/>)}
      <h2>{title}</h2>
    </div>
  )
}

export default InfoBar