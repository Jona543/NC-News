import { postComment } from "../api";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Contexts/User";

const CommentAdder = (props) => {
  const { article_id } = useParams();
  const [comment, setComment] = useState("");
  const [newComments, setNewComments] = useState([]);
  const { isLoggedIn, loggedInUser } = useContext(UserContext)
  const { setLoginPrompt } = props

  const handleSubmit = (event) => {
    console.log(event)
    if(isLoggedIn){
      const username = loggedInUser.username;
      event.preventDefault();
      setNewComments((comment) => {
        console.log(comment)
        return newComments
      });
      postComment(article_id, username, comment);
      setComment("");
    } else {
      event.preventDefault()
      setLoginPrompt("Please log in to post a comment")
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          id="newComment"
          type="text"
          value={comment}
          onChange={(event) => {
            setComment(event.target.value);
          }}
        />
        <button type="submit">Post Comment</button>
      </form>
    </>
  );
};

export default CommentAdder;
