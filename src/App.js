import React, { useState } from "react";
import CreatePostForm from "./Components/CreatePostForm/CreatePostForm";
import Post from "./Components/Post/Post";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  const [entries, setEntries] = useState([
    // { name: "" },
    // { post: "" },
  ]);

  function addNewPost(entry) {
    let tempEntries = [entry, ...entries];

    setEntries(tempEntries);
  }

  return (
    <div>
      <NavBar />
      <CreatePostForm addNewPostProperty={addNewPost} />
      <Post parentEntries={entries} />
    </div>
  );
}

export default App;
