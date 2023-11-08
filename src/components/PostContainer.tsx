import React from "react";
import { postAPI } from "../services/PostService";
import PostItem from "./PostItem";

export default function PostContainer() {
  const { data: posts } = postAPI.useFetchAllPostsQuery(5);
  return (
    <div>
      <div className="post__list">
        {posts && posts.map((post) => (
          <PostItem post={post}></PostItem>
        ))}
      </div>
    </div>
  );
}
