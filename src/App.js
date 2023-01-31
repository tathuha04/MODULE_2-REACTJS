import './App.css';
import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";


function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios
    .get(`${baseURL}/1`)
    .then((response) => {
      setPost(response.data);
    });
  }, []);


  function createPost() {
    axios
      .post(baseURL, {
        title: "Hello World",
        body: "This is a new post."
      })
      .then((response) => {
        setPost(response.data);
      });
  }
  function updatePost() {
    axios
      .put(`${baseURL}/1`, {
        title: "Hello World!",
        body: "This is a new post.",
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  function deletePost() {
    axios
      .delete(`${baseURL}/1`)
      .then(() => {
        alert("Post delete!");
        setPost(null);
      })
  }

  if (!post) return "No post!";

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={createPost}>create Post</button>
      <button onClick={updatePost}>update Post</button>
      <button onClick={deletePost}>delete Post</button>
    </div>
  );
}

export default App;
