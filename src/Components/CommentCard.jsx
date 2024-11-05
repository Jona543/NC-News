import Comments from "./Comments";

const CommentCard = (props) => {
  const { comment } = props;
  return (
    <ul>
      <li className="comments">
        <p className="comment-body">{comment.body}</p>
        <p className="comment-attributes">{comment.author}</p>
        <p className="comment-attributes">{comment.votes} votes</p>
      </li>
    </ul>
  );
};

export default CommentCard;
