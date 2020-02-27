//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import data from "../../dummy-data.js";

const PostsPage = () => {
  const posts = useState(data)[0];
  return (
    <div className="posts-container-wrapper">
      {posts.map((post, index) => {
        return <Post key={index} post={post} />;
      })}
    </div>
  );
};

export default PostsPage;
