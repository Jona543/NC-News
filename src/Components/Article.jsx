import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticle, patchVotes } from "../api";
import Comments from "./Comments";
import ErrorComponent from "./ErrorComponent";
import { Link } from "react-router-dom";

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [upvote, setUpvote] = useState(false);
  const [downvote, setDownvote] = useState(false);
  const [votesError, setVotesError] = useState(null);
  const [error, setError] = useState(null)

  useEffect(() => {
    getArticle(article_id)
      .then((article) => {
        setArticle(article);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error)
      });
  }, [article_id]);

  if (isLoading) {
    return <p className="loading">Loading...</p>;
  }

  if(error) {
    return <ErrorComponent message={error.response.data.message} status={error.response.status}/>
  }

  const handleUpVote = () => {
    const voteChange = upvote ? -1 : downvote ? 2 : 1;
    setUpvote(!upvote);
    setDownvote(false);
    setArticle({ ...article, votes: article.votes + voteChange });

    patchVotes(article_id, voteChange).catch((err) => {
      setArticle({ ...article, votes: article.votes - voteChange });
      setVotesError("Unable to update votes");
    });
  };

  const handleDownVote = () => {
    const voteChange = downvote ? 1 : upvote ? -2 : -1;
    setDownvote(!downvote);
    setUpvote(false);
    setArticle({ ...article, votes: article.votes + voteChange });

    patchVotes(article_id, voteChange).catch((err) => {
      setArticle({ ...article, votes: article.votes - voteChange });
      setVotesError("Unable to update votes");
    });
  };

  if (votesError) {
    return votesError;
  }

  return (
    <>
      <div className="article-full">
        <ul className="article-list">
          <li>
            <img src={article.article_img_url}></img>
          </li>
          <button onClick={handleUpVote}>
            +
          </button>
          <button onClick={handleDownVote}>
            -
          </button>
          <li>{article.votes} votes</li>
          <li>
            <h1 className="article-title">{article.title}</h1>
          </li>
          <li className="article-body">{article.body}</li>
          <li className="article-author">Written by: {article.author}</li>
          <li className="article-comments-count">{article.comment_count} comments</li>
          <Link to={"/"}>
                <h2 className="return-to-articles">Return to articles</h2>
                </Link>
        </ul>
        <Comments article_id={article.article_id} />
      </div>
    </>
  );
};

export default Article;
