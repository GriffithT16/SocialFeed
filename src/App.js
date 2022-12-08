import React, { useState } from "react";
import CreatePostForm from "./Components/CreatePostForm/CreatePostForm";
import Post from "./Components/Post/Post";
import NavBar from "./Components/NavBar/NavBar";
import './App.css'


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
    <div className="container-fluid">
      <div className="row">
        <NavBar />
        <div className="col-md-10">          
          <div className="border-box" style={{'margin-left': '10rem'}}>
            <CreatePostForm addNewPostProperty={addNewPost} />            
          </div>
          <div className="border-box" style={{'margin-left': '10rem'}}>
            <Post parentEntries={entries} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
