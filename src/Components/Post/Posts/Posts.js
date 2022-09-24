import Post from "../Post/Post";
import {getPosts} from "../../../Services/axios.service";
import {useEffect, useState} from "react";
import css from "../../CSS/components.module.css"


export default function Posts (){
    const [posts, setPosts] = useState([])


    useEffect(()=>{
        getPosts().then((
                {data}) => setPosts(data))
    },[])



    return(
        <div className={css.elements}>
           {posts.map(post => <Post key = {post.id} title={post.title} body={post.body} postId={post.postId} id={post.id} />)}
        </div>)}

