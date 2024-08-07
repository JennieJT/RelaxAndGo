import { useState } from "react";
import { useGetKnowledgeNodesQuery } from "../../state/api.ts";
import Card from "../../components/card";
import DopaBox from "../../components/dopaBox/index.tsx";
import InfoBar from "../../components/InfoBar/index.tsx";
import Layout from "../../components/layout/index.tsx";

interface Data{
  id:string,
  title:string,
  content:string,
}


function KnowledgeCards() {
  const { data } = useGetKnowledgeNodesQuery();
  return (
    <div>
      <InfoBar />
      <Layout scene = "NewLearnings">
        {data?.map((cardData, index) => (
          <Card knowledgeNode={cardData} key={index} />
        ))}
      </Layout>
    </div>
  );
}

export default KnowledgeCards;
