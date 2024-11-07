import { useState, useEffect } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() => {
    getArticles()
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        return error;
      });
  }, []);

  if (isLoading) {
    return <p className="loading">Loading Articles</p>;
  }

  return (
    <>
      <h1>All articles: </h1>
      <ul className="flex-container">
        {articles.map((article, index) => {
          return <ArticleCard key={index} article={article} />;
        })}
      </ul>
    </>
  );
};

export default Articles;
