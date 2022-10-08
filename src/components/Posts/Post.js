import {useDispatch} from "react-redux";
import {postActions} from "../../redux/slices/post.slice";

const Post =({post}) =>{
    const {id, title, body} = post

    const dispatch = useDispatch();

    return(
        <div>
            <h4>{id}:{title}</h4>
            <p>{body}</p>
            <button onClick={() => dispatch(postActions.getOne(post))}>Select</button>
            <button onClick={()=>dispatch(postActions.getById({id}))}>Get post from API</button>
            <button onClick={() => dispatch(postActions.deleteById(id))}>Delete</button>
        </div>
    )
}

export {Post};





