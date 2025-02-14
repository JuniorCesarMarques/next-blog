"use client";

import { useState } from "react";
import TextEditor from "@/components/text-editor/TextEditor";

const NewPost = () => {
  const [postContent, setPostContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Texto salvo:", postContent);
    // Aqui você enviaria para o backend
  };

  let test = "test";

  return (
    <form onSubmit={handleSubmit}>
      <h2>Criar um novo post</h2>
      <TextEditor onChange={setPostContent} />
      <button type="submit">Salvar</button>
    </form>
  );
};

export default NewPost;
