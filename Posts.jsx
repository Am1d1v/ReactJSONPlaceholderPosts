import { useEffect, useState } from "react";
import React from "react";
import Post from "./Post";


function Posts(){

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then((posts) => {
            //console.log(posts)
            setPosts(posts)
        })
        .catch((error) => console.log(error));
    }, [])

    //console.log(posts)

    return(
       <React.Fragment>
         {posts.map((post) => {
           return <Post {...post} key={post.id}/>
         })}
       </React.Fragment>
    )
}

export default Posts;