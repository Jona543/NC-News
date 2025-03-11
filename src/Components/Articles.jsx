import { useState, useEffect } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";
import { useSearchParams, useParams } from "react-router-dom";
import ErrorComponent from "./ErrorComponent";
import TopicsList from "./TopicsList";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isError, setIsError] = useState(null);

  const { topic } = useParams();
  const sortBy = searchParams.get("sort_by") || "created_at";
  const order = searchParams.get("order") || "desc";

  useEffect(() => {
    getArticles(topic, sortBy, order)
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(error);
      });
  }, [topic, sortBy, order]);

  const handleSortChange = (event) => {
    const [newSortBy, newOrder] = event.target.value.split(":");
    setSearchParams({
      topic: topic || "",
      sort_by: newSortBy,
      order: newOrder,
    });
  };

  if (isLoading) {
    return <p className="loading">Loading Articles</p>;
  }

  if (isError) {
    return (
      <ErrorComponent
        message={isError.response.data.message}
        status={isError.response.status}
      />
    );
  }

  return (
    <>
      <h1 className="articlesTitle">
        {topic && topic !== "null"
          ? `Viewing ${topic.charAt(0).toUpperCase() + topic.slice(1)} Articles`
          : "Viewing All Articles"}
      </h1>
      <TopicsList/>
      <div className="articlesTitle">
        <label htmlFor="sort-by">Sort By: </label>
        <select
          id="sort-by"
          onChange={handleSortChange}
          value={`${sortBy}:${order}`}
        >
          <option value="created_at:desc">Newest</option>
          <option value="created_at:asc">Oldest</option>
          <option value="comment_count:desc">Most Comments</option>
          <option value="comment_count:asc">Least Comments</option>
          <option value="votes:desc">Most Votes</option>
          <option value="votes:asc">Least Votes</option>
        </select>
      </div>
      <ul className="flex-container">
        {articles.map((article, index) => {
          return <ArticleCard key={index} article={article} />;
        })}
      </ul>
    </>
  );
};

export default Articles;
