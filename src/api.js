import axios from "axios";

const api = axios.create({
  baseURL: "https://northcoders-news-7th3.onrender.com/api",
});

export const getArticles = () => {
  return api.get("/articles").then(({ data }) => {
    return data;
  });
};

export const getArticle = (article_id) => {
  return api.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const getComments = (article_id) => {
  return api.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data;
  });
};

export const patchVotes = (article_id, inc_votes) => {
  const incVotes = { article_id, inc_votes };
  return api.patch(`/articles/${article_id}`, incVotes);
};

export const postComment = (article_id, username, body) => {
  const commentInfo = { username, body };
  return api
    .post(`/articles/${article_id}/comments`, commentInfo)
    .then((data) => {
      return data;
    });
};

export const getUsers = () => {
  return api.get("/users").then(({ data }) => {
    return data;
  });
};
