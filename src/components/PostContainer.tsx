import React, { useState } from "react";
import { postAPI } from "../services/PostService";
import PostItem from "./PostItem";

export default function PostContainer() {
  const [limit, setLimit] = useState(10);

  const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(limit);
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
