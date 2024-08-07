import { useContext } from "react";
import Title1 from "../../components/highlightTitle/Title1";
import CheckItem from "../../components/list/Checkitem";
import TypeLine from "../../components/type/type";
import { TypeColorsContext } from "../../context/ColorContext";
import {
  useGetAlgosQuery,
  useUpdateAlgoCompletionMutation,
} from "../../state/api.ts";
import { CODING } from "../../mock";
import Layout from "../../components/layout/index.tsx";
import StatusBar from "../../components/statusBar/StatusBar.tsx";

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="shadow-md">
      {children ? children : "Please add some content..."}
    </div>
  );
};

function AlgoCoding() {
  const { data: algos, error, isLoading } = useGetAlgosQuery();
  const strings = algos?.filter((algo) => algo.type.includes("String"));
  const trees = algos?.filter((algo) => algo.type.includes("Tree"));
  const slidingWindows = algos?.filter((algo) =>
    algo.type.includes("Sliding Window")
  );
  const twoPointers = algos?.filter((algo) =>
    algo.type.includes("Two Pointers")
  );
  const linkedLists = algos?.filter((algo) =>
    algo.type.includes("Linked List")
  );
  const bfs = algos?.filter((algo) => algo.type.includes("BFS"));
  const dfs = algos?.filter((algo) => algo.type.includes("DFS"));
  const hashTables = algos?.filter((algo) => algo.type.includes("Hash Table"));
  const graphs = algos?.filter((algo) => algo.type.includes("Graph"));
  const heaps = algos?.filter((algo) => algo.type.includes("Heap"));
  const binarySearches = algos?.filter((algo) => algo.type.includes("BP"));
  const prefixSums = algos?.filter((algo) => algo.type.includes("Prefix Sum"));
  const algoTypes = [
    { title: "String", total: strings?.length, achieved: strings?.filter((algo) => algo.status).length },
    { title: "Tree", total: trees?.length, achieved: trees?.filter((algo) => algo.status).length },
    { title: "Sliding Window", total: slidingWindows?.length, achieved: slidingWindows?.filter((algo) => algo.status).length },
    { title: "Two Pointers", total: twoPointers?.length, achieved: twoPointers?.filter((algo) => algo.status).length },
    { title: "Linked List", total: linkedLists?.length, achieved: linkedLists?.filter((algo) => algo.status).length },
    { title: "BFS", total: bfs?.length, achieved: bfs?.filter((algo) => algo.status).length },
    { title: "DFS", total: dfs?.length, achieved: dfs?.filter((algo) => algo.status).length },
    { title: "Hash Table", total: hashTables?.length, achieved: hashTables?.filter((algo) => algo.status).length },
    { title: "Graph", total: graphs?.length, achieved: graphs?.filter((algo) => algo.status).length },
    { title: "Heap", total: heaps?.length, achieved: heaps?.filter((algo) => algo.status).length },
    { title: "Binary Search", total: binarySearches?.length, achieved: binarySearches?.filter((algo) => algo.status).length },
    { title: "Prefix Sum", total: prefixSums?.length, achieved: prefixSums?.filter((algo) => algo.status).length },
];


  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading algos</div>;

  return (
    <Layout scene={"Algorithm"} types = {algoTypes}>
      {Array.from({ length: 10 }).map((week, weekIndex) => (
        <Card key={weekIndex}>
          <Title1 color={"slate"}>Week {weekIndex + 1}</Title1>
          {Array.from({ length: 30 }, (_, i) => i + 20 * weekIndex).map(
            (_, itemIndex) => {
              const index = 20 * weekIndex + itemIndex;
              const algo = algos ? algos[index] : null;
              if (!algo) return null;
              return (
                <CheckItem
                  key={algo._id}
                  item={{
                    id: algo._id,
                    status: algo.status,
                    content: algo.difficulty,
                  }}
                >
                  <TypeLine item={{ title: algo.title, type: algo.type }} />
                </CheckItem>
              );
            }
          )}
        </Card>
      ))}
    </Layout>
  );
}

export default AlgoCoding;
