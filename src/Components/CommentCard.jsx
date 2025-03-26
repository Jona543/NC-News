import { useContext } from "react";
import { useEffect, useState } from "react";
import { UserContext } from "../Contexts/User";
import { deleteComment } from "../api";

const CommentCard = (props) => {
  const { comment, comments, setComments, setDeletedCommentMessage } = props;
  const { loggedInUser } = useContext(UserContext);
  const [wrongUserPrompt, setWrongUserPrompt] = useState("");

  const handleSubmit = () => {
    if (loggedInUser.username === comment.author) {
      const newComments = comments.filter((currentComment) => {
        if(currentComment.comment_id !== comment.comment_id){
          return currentComment
        } 
      });
      setComments(newComments);
      setDeletedCommentMessage("Comment deleted")
      deleteComment(comment.comment_id);
    } else {
      setWrongUserPrompt("can't delete comment that isn't yours");
    }
  };

  return (
    <>
      <div className="comments">
        <p>{wrongUserPrompt}</p>
        <p className="comment-body">{comment.body}</p>
        <button onClick={handleSubmit}>Delete</button>
        <p className="comment-author">{comment.author}</p>
        <p className="comment-votes">{comment.votes} votes</p>
      </div>
    </>
  );
};

export default CommentCard;
