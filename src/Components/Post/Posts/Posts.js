import Post from "../Post/Post";
import {getPosts} from "../../../Services/axios.service";
import {useEffect, useState} from "react";



export default function Posts (){
    const [posts, setPosts] = useState([])


    useEffect(()=>{
        getPosts().then((
                {data}) => setPosts(data))
    },[])



    return(
        <div>
           {posts.map(post => <Post key = {post.id} title={post.title} body={post.body} postId={post.postId} id={post.id} />)}
        </div>)}

