import { useCallback, useState } from "react";
import InfoBar from "../../components/InfoBar";
import DopaBox from "../../components/dopaBox";
import TaskCard from "../../components/TaskCard";
import CodeArea2 from "./CodeArea-2";
import ReviewArea1 from "./ReviewArea1";
import RepeatArea1 from "./RepeatArea1";
import Layout from "../../components/layout";

const mock1 = [
  "complete button and dopabox setting",
  ["I hope this way is okay"],
];
const len = mock1[1]?.length + 1;

function Golden4hWork() {
  const [dopaBoxComplete, setDopaBoxComplete] = useState(7 * 60 + 53);
  //change the totalTime manually
  function handleDopaBoxComplete() {
    setDopaBoxComplete((cur) => cur + 1);
  }

  return (
    <Layout scene = "4hwork">
      <CodeArea2 />
      <ReviewArea1 />
      <RepeatArea1 />
    </Layout>
  );
}

export default Golden4hWork;
