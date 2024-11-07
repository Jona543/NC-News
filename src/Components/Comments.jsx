import { getComments } from "../api";
import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import CommentAdder from "./CommentAdder";

const Comments = (props) => {
  const { article_id } = props;
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loginPrompt, setLoginPrompt] = useState("");
  const [deletedCommentMessage, setDeletedCommentMessage] = useState("");

  useEffect(() => {
    getComments(article_id)
      .then((comments) => {
        setComments(comments);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        return <p>No Comments Yet</p>;
      });
  }, [article_id]);

  const addComment = (commentToAdd) => {
    setComments((currentComments) => {
      return [commentToAdd, ...currentComments]
    })
  }

  if (isLoading) {
    return <p className="loading">Loading Comments...</p>;
  }

  return (
    <>
      <div>
        <h2>Comments: </h2>
        <p>{loginPrompt}</p>
        <CommentAdder setLoginPrompt={setLoginPrompt} addComment={addComment} comments={comments} setComments={setComments}/>
        <p>{deletedCommentMessage}</p>
        <ul>
          {comments.map((comment, index) => {
            return (
              <CommentCard
                key={index}
                comment={comment}
                comments={comments}
                setComments={setComments}
                setDeletedCommentMessage={setDeletedCommentMessage}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Comments;
