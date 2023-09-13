

function Post(props){

    //console.log(props)
    const {id, title, body} = props

    return(
        <div>
            <h2>UserID: {id}</h2>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    )
}

export default Post;