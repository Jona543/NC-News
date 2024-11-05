import { getComments } from "../api";
import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";

const Comments = (props) => {
  const { article_id } = props;
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getComments(article_id)
      .then((comments) => {
        setComments(comments);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        return <p>No comments yet</p>
      });
  }, [article_id]);

  if (comments.length === 0){
    return <p>No comments yet</p>
  }

  if (isLoading) {
    return <p className="loading">Loading comments...</p>;
  }

  return (
    <>
      <div>
        <h2>Comments: </h2>
        <ul>
          {comments.map((comment, index) => {
            return <CommentCard key={index} comment={comment} />
          })}
        </ul>
      </div>
    </>
  );
};

export default Comments;
