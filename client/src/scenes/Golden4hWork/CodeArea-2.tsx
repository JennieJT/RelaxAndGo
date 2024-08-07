import Title1 from "../../components/highlightTitle/Title1";
import TaskCard from "../../components/TaskCard";

function CodeArea2() {
  return (
    <div className="p-2">
      <Title1>2h - Coding </Title1>
      <TaskCard
        goal="Enable Localforage"
        path={[
          "1. Install LocalForage",
          "2. Import locaForage",
          "3. It is always async",
          "4. removeItem(), setItem(), getItem<>()",
          "5. useEffect()",
        ]}
        status={true}
      />
      <TaskCard
        goal="Color Theme + Context API"
        path={[
          "1. ChatGPT Answer 逆推",
          "2. Go to Knowledge Fields and check the definition of Context API",
          "3. Write it yourself",
          "4. Review",
        ]}
        status={false}
      />
      <TaskCard
        goal="Algo Coding This Week"
        path={[
            "1. Create Algo Coding List",
            "2. Do 1 or 2 String and recursive questions"
        ]}
        status={false}
      />
    </div>
  );
}

export default CodeArea2;
