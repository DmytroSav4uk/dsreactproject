import Comment from "../Comment/Comment";
import {getComments} from "../../../Services/axios.service";
import {useEffect, useState} from "react";
import css from "../../CSS/components.module.css"



export default function Comments (){
    const [comments, setComments] = useState([])

    useEffect(()=>{
        getComments().then(({data}) => setComments(data))
    },[])

    return(

        <div className={css.elements}>
            {comments.map(comment => <Comment key = {comment.id} name={comment.name}  email={comment.email} body={comment.body} postId={comment.postId} />)}
        </div>)}

