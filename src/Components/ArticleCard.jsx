import { Link } from "react-router-dom";

const ArticleCard = (props) => {
  const { article } = props;

  return (
    <>
      <div className="article-card">
        <div className="container">
          <ul className="card-list">
            <li>
              <Link to={`/article/${article.article_id}`} article={article}>
                <h1>{article.title}</h1>
              </Link>
            </li>
            <li>Written by {article.author}</li>
            <li>Topic: {article.topic}</li>
            <li>
              <img src={article.article_img_url} />
            </li>
            <li>{article.comment_count} comments</li>
            <li>{article.votes} votes</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
