"use client"

import { useRef, useState } from "react";

import JoditEditor from "jodit-react";

const TextEditor = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = {
    readOlny: false,
  }

  const handleSave = () => {
    localStorage.setItem("document", content);
  }

  console.log(content)
  return (
    <div>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        tabIndex={1}
        onBlur={(newContent) => setContent(newContent)}
        onChange={(newContent) => {}}
      />
    </div>
  );
};

export default TextEditor;
