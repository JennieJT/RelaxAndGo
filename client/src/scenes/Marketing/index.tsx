import Layout from "../../components/layout";
import TaskCard from "../../components/TaskCard";

function Marketing() {
  return (
    <Layout scene = "Marketing">
      <TaskCard
        goal={" I might be doing an experiment this weeks"}
        path={[
          "1. read and write down some sentences",
          ".2. test the sentence",
        ]}
      />
    </Layout>
  );
}

export default Marketing;
