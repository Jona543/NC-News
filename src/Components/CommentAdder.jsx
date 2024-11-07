import { postComment } from "../api";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Contexts/User";

const CommentAdder = (props) => {
  const { article_id } = useParams();
  const [comment, setComment] = useState("");
  // const [loading, setLoading] = useState(false)
  const { isLoggedIn, loggedInUser } = useContext(UserContext);
  const { setLoginPrompt, comments, setComments, addComment } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isLoggedIn) {
      const username = loggedInUser.username;

      // setLoading(true)
      postComment(article_id, username, comment).then((newComment) => {
        setComments((currComments) => {
          console.log(currComments, newComment)
          return [...currComments, newComment.data.comment];
        });
        setComment("");
      });
      // addComment(comment);
    } else {
      // event.preventDefault();
      setLoginPrompt("Please log in to post a comment");
    }
  };

  // if (loading){
  //   return <p>Posting comment</p>
  // }

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
