import { useEffect, useState } from "react";
import React from "react";
import Post from "./Post";


function Posts(){

    const [posts, setPosts] = useState([]);
    const[error, setError] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then((posts) => {
            //console.log(posts)
            setPosts(posts)
        })
        .catch((error) => setError(alert(error.message)));
    }, [])

    //console.log(posts)

    if(error){
      return (
        <h1>Error: {error}</h1>
      )
    }

    return(
       <React.Fragment>
         {posts.map((post) => {
           return <Post {...post} key={post.id}/>
         })}
       </React.Fragment>
    )
}

export default Posts;