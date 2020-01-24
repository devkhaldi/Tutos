import React from "react";
import { useContext } from "react";
import { PostsContext } from "./Container";

function Posts() {
  const posts = useContext(PostsContext);
  return (
    <ul className="list-group">
      {posts.map(post => (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      ))}
    </ul>
  );
}

export default Posts;
