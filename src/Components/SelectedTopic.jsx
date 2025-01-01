import { Link } from "react-router-dom";

const SelectedTopic = (props) => {
  const topic = props.topic.slug;

  return (
    <div>
      <Link to={`/articles/${topic}`} topic={topic}><button className="userTopicButtons">{topic}</button></Link>
    </div>
  );
};

export default SelectedTopic;
