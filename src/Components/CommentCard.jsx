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
    <ul>
      <li className="comments">
        <p>{wrongUserPrompt}</p>
        <button onClick={handleSubmit}>Delete Comment</button>
        <p className="comment-body">{comment.body}</p>
        <p className="comment-attributes">{comment.author}</p>
        <p className="comment-attributes">{comment.votes} votes</p>
      </li>
    </ul>
  );
};

export default CommentCard;
