import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {Post} from "./Post";
import {postActions} from "../../redux/slices/post.slice";
import css from "../components.module.css"

const Posts = () =>{

const dispatch = useDispatch();
const {posts, error,loading,postFromAPI} = useSelector(state =>state.postReducer);

useEffect(()=>{
    dispatch(postActions.getAll())
},[])

return(
    <div className={`${css.elements} ${css.biggerWidth}`}>
        {postFromAPI&&<h1>data from API: {postFromAPI.title}</h1>}
        {loading&&<h1>Loading........................</h1>}
        {error&&<h1>Error</h1> }
        {posts.map(post=><Post key={post.id} post={post}/> )}
    </div>
)
}

export {Posts};