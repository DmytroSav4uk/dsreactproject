import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {Post} from "./Post";
import {postActions} from "../../redux/slices/post.slice";


const Posts = () =>{

const dispatch = useDispatch();
const {posts, error,} = useSelector(state =>state.postReducer);

useEffect(()=>{
    dispatch(postActions.getAll())
},[])

return(
    <div>
        {posts.map(post=><Post key={post.id} post={post}/> )}
    </div>
)
}

export {Posts};