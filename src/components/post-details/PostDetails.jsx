import React from "react";

const PostDetails = async ({ id }) => {

  const response = await fetch(`http://dummyjson.com/posts/${id}`);
  const data = await response.json();
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <div>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
    </div>
  );
};

export default PostDetails;
