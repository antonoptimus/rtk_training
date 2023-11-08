import React from "react";
import { postAPI } from "../services/PostService";
import PostItem from "./PostItem";

export default function PostContainer2() {
  const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(5);
  return (
    <div>
      <div className="post__list">
        {isLoading && <h1>Идёт загрузка...</h1>}
        {error && <h1>Произошла ошибка...</h1>}
        {posts &&
          posts.map((post) => <PostItem key={post.id} post={post}></PostItem>)}
      </div>
    </div>
  );
}
