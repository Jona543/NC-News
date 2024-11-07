import { Link } from "react-router-dom";

const SelectedTopic = (props) => {
  const topic = props.topic.slug;

  return (
    <div>
      <Link to={`/articles/${topic}`} topic={topic}><h2>{topic}</h2></Link>
    </div>
  );
};

export default SelectedTopic;
