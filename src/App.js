import React, { useState } from "react";
import CreatePostForm from "./Components/CreatePostForm/CreatePostForm";
import Post from "./Components/Post/Post";

function App() {
  const [entries, setEntries] = useState([
    { name: "Tyler" },
    { post: "Enter Post Here" },
  ]);

  return (
    <div>
        <h3 style={{ margin: "1em" }}>
          Social
          <small className="text-muted">Feed</small>
        </h3>
      <CreatePostForm />
      <Post parentEntries={entries} />
    </div>
  );
}

export default App;
