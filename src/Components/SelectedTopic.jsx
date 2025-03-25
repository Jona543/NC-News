import { Link } from "react-router-dom";

const SelectedTopic = (props) => {
  const topic = props.topic.slug;

  return (
    <div>
      <Link to={`/articles/${topic}`} topic={topic}><p className="topic-links">{topic.charAt(0).toUpperCase() + topic.slice(1)}</p></Link>
    </div>
  );
};

export default SelectedTopic;
