import { useEffect, useState } from "react";
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
       <div>
         {posts.map((post) => {
           return <Post {...post} key={post.id}/>
         })}
       </div>
    )
}

export default Posts;