import React, { useState } from 'react';


const CreatePostForm = (props) => {

    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            name: name,
            post: post
        };
        console.log(newEntry)
        props.addNewPostProperty(newEntry)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type='name' value={name} onChange={(event) => setName(event.target.value)} />
            <label>Post</label>
            <input type='post' value={post} onChange={(event) => setPost(event.target.value)}/>
            <button type='submit'>Create Post</button>
        </form>
     );
}
 
export default CreatePostForm;