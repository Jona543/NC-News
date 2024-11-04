const ArticleCard = (props) => {
  const { article } = props;

  return (
    <>
      <div className="article-card">
        <div className="container">
          <ul>
            <li>Title: {article.title}</li>
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
    </>
  );
};

export default ArticleCard;
