import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticle } from "../api";
import Comments from "./Comments"

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getArticle(article_id).then((article) => {
      setArticle(article);
      setIsLoading(false)
    }).catch((error) => {
        setIsLoading(false)
        return error
    });
  }, [article_id]);

  if (isLoading) {
    return <p className="loading">Loading...</p>
  }

  return (
    <>
        <div className="article-full">
          <ul className="article-list">
            <li>
              <img src={article.article_img_url}></img>
            </li>
            <li><h1>{article.title}</h1></li>
            <li>{article.body}</li>
            <li>Written by: {article.author}</li>
            <li>{article.comment_count} comments</li>
            <li>{article.votes} votes</li>
          </ul>
          <Comments article_id={article.article_id}/>
        </div>
    </>
  );
};

export default Article;
