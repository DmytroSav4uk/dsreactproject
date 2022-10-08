const Post =({post}) =>{
    const {id, title, body} = post


    return(
        <div>
            <h4>{id}:{title}</h4>
            <p>{body}</p>
            <button>Select</button>
            <button>Get post from API</button>
            <button>Delete</button>
        </div>
    )
}

export {Post};