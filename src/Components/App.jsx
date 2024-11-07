import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Articles from "./Articles";
import Article from "./Article";
import ArticlesByTopic from "./ArticlesByTopic"
import { useState } from "react";
import { UserContext } from "../Contexts/User";

function App() {
  const [loggedInUser, setLoggedInUser] = useState("");
  const isLoggedIn = Object.keys(loggedInUser).length > 0;
  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser, isLoggedIn }}>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:article_id" element={<Article />} />
          <Route path="/articles/:topic" element={<ArticlesByTopic />} />
        </Routes>
      </>
    </UserContext.Provider>
  );
}

export default App;
