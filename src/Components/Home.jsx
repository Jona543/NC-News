import { Link } from "react-router-dom";
import TopicsList from "./TopicsList";

const Home = () => {
  return (
    <div>
      <Link to={"/articles"} className="viewArticles">
        <button>View All Articles Here</button>
      </Link>
      <TopicsList />
    </div>
  );
};

export default Home;
