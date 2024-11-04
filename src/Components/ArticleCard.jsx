import { Link } from "react-router-dom"

const ArticleCard = (props) => {
   
  const { article } = props;

  return (
    <><Link to={`/articles/${article.article_id}`} article={article}>
      <div className="article-card">
        <div className="container">
          <ul className="card-list">
            <li><h1>Title: {article.title}</h1></li>
            <li>Author: {article.author}</li>
            <li>Topic: {article.topic}</li>
            <li>
              <img src={article.article_img_url} />
            </li>
            <li>Comment Count: {article.comment_count}</li>
            <li>Votes: {article.votes}</li>
          </ul>
        </div>
      </div>
      </Link>
    </>
  );
};

export default ArticleCard;
