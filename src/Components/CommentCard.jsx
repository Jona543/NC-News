import Comments from "./Comments";

const CommentCard = (props) => {
  const { comment } = props;
  return (
    <ul className="comments">
      <li className="comment-body">{comment.body}</li>
      <li className="comment-attributes">{comment.author}</li>
      <li className="comment-attributes">{comment.votes} votes</li>
    </ul>
  );
};

export default CommentCard;
