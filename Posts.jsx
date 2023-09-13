import { useEffect, useState } from "react";
import React from "react";
import Post from "./Post";


function Posts(){

    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then((posts) => {
            //console.log(posts)
            setPosts(posts)
        })
        .catch((error) => setError(alert(error.message)))
        .finally(() => setIsLoading(false))
    }, [])

    //console.log(posts)

    if(error){
      return (
        <h1>Error: {error}</h1>
      )
    }

    return(
       <React.Fragment>
        {isLoading ? <h1>Loading...</h1> : posts.map((post) => {
           return <Post {...post} key={post.id}/>
         })}
         
       </React.Fragment>
    )
}

export default Posts;