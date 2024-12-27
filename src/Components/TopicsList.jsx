import { useState, useEffect } from "react";
import { getTopics } from "../api";
import SelectedTopic from "./SelectedTopic";

const TopicsList = () => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getTopics()
      .then((topics) => {
        setTopics(topics);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        return error;
      });
  }, []);

  if (isLoading) {
    return <p className="loading">Loading Topics</p>;
  }

  return (
    <>
      <h2>View Articles by Topic: </h2>
      <ul>
        {topics.map((topic) => {
          return <SelectedTopic topic={topic} key={topic.slug} />;
        })}
      </ul>
    </>
  );
};

export default TopicsList;
