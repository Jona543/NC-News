import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticle } from "../api";

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);

  useEffect(() => {
    getArticle(article_id).then((article) => {
      setArticle(article);
    });
  }, [article_id]);

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
        </div>
    </>
  );
};

export default Article;
