import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticle, patchVotes } from "../api";
import Comments from "./Comments";

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [upvote, setUpvote] = useState(false);
  const [downvote, setDownvote] = useState(false);
  const [votesError, setVotesError] = useState(null);

  useEffect(() => {
    getArticle(article_id)
      .then((article) => {
        setArticle(article);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        return error;
      });
  }, [article_id]);

  if (isLoading) {
    return <p className="loading">Loading...</p>;
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
          <button className="voteButtons" onClick={handleUpVote}>
            +
          </button>
          <button className="voteButtons" onClick={handleDownVote}>
            -
          </button>
          <li>{article.votes} votes</li>
          <li>
            <h1>{article.title}</h1>
          </li>
          <li>{article.body}</li>
          <li>Written by: {article.author}</li>
          <li>{article.comment_count} comments</li>
        </ul>
        <Comments article_id={article.article_id} />
      </div>
    </>
  );
};

export default Article;
