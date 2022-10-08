import {useDispatch} from "react-redux";

import {postActions} from "../../redux/slices/post.slice";
import css from "../components.module.css"

const Post =({post}) =>{
    const {id, title, body} = post

    const dispatch = useDispatch();

    return(
        <div className={`${css.element} ${css.smallFont}`}>
            <h4>{id}:{title}</h4>
            <p>{body}</p>
            <div className={css.buttonWrap}>
            <button onClick={() => dispatch(postActions.getOne(post))}>Select</button>
            <button onClick={()=>dispatch(postActions.getById({id}))}>Get post from API</button>
            <button onClick={() => dispatch(postActions.deleteById(id))}>Delete</button>
            </div>
        </div>
    )
}

export {Post};





