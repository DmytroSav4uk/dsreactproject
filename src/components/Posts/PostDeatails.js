import {useSelector} from "react-redux";

const PostDetails = () => {

    const {onePost} = useSelector(state => state.postReducer)
    return(

        <div>
            <h4>{onePost&&onePost.title}</h4>
            <p>{onePost&&onePost.body}</p>
        </div>
    )
}

export {PostDetails}