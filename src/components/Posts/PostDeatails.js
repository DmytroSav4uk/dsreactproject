import {useSelector} from "react-redux";

import css from "../components.module.css"

const PostDetails = () => {

    const {onePost} = useSelector(state => state.postReducer)
    return(

        <div className={css.details}>
            <h4>{onePost&&onePost.title}</h4>
            <p>{onePost&&onePost.body}</p>
        </div>
    )
}

export {PostDetails}