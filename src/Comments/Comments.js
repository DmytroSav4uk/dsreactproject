import {useEffect, useState} from "react";
import {CommentForm} from "./CommentForm";
import {Comment} from "./Comment"

import {commentService} from "../Services/Comment.service";
import css from "../Css/components.module.css"


const Comments = () => {
    let [comments, setComments] = useState([]);
    let [commentForUpdate, setCommentForUpdate] = useState(null)

    useEffect(() => {
        commentService.getAll().then(({data}) => setComments(data))
    }, [])

    return (
        <div>
            <div className={css.inputs}>
                <CommentForm setComments={setComments} commentForUpdate={commentForUpdate} setCommentForUpdate={setCommentForUpdate}/>
            </div>
            <div className={css.cards}>
                {comments.map(comment => <Comment key={comment.id} comment={comment} setComments={setComments} setCommentForUpdate={setCommentForUpdate}
                />)}
            </div>
        </div>)
};

export {Comments};