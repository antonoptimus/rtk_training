import React, { useState } from "react";
import { postAPI } from "../services/PostService";
import PostItem from "./PostItem";
import { IPost } from "./../models/IPost";

export default function PostContainer() {
  const [limit, setLimit] = useState(100);
  const [createPost, {}] = postAPI.useCreatePostMutation();
  const [deletePost, {}] = postAPI.useDeletePostMutation();
  const [updatePost, {}] = postAPI.useUpdatePostMutation();

  const handleCreate = async () => {
    const title = prompt();
    await createPost({ title, body: title } as IPost);
  };

  const {
    data: posts,
    error,
    isLoading,
  } = postAPI.useFetchAllPostsQuery(limit);

  const handleUpdate = (post: IPost) => {
    updatePost(post);
  };

  const handleRemove = (post: IPost) => {
    deletePost(post);
  };

  return (
    <div>
      <div className="post__list">
        <button onClick={handleCreate}>Add new post</button>
        {isLoading && <h1>Идёт загрузка...</h1>}
        {error && <h1>Произошла ошибка...</h1>}
        {posts &&
          posts.map((post) => (
            <PostItem
              remove={handleRemove}
              update={handleUpdate}
              key={post.id}
              post={post}
            ></PostItem>
          ))}
      </div>
    </div>
  );
}
