import {commentService} from "../Services/Comment.service";
import css from "../Css/components.module.css"

const Comment = ({comment, setComments,setCommentForUpdate}) => {
    const {id, name, email, body} = comment;


    const deleteComment = async () => {
        await commentService.deleteById(id)
        setComments(comments => {
                const index = comments.findIndex(value => value.id === id);
                if (index !== -1) {
                    comments.splice(index, 1)
                }
                return [...comments]
            }
        )
    }
    return (
        <div className={css.card}>
            <div className={'text'}>
                <h4>{name}</h4>
                <h5>{email}</h5>
                <p>{body}</p>
            </div>

            <div className={css.buttons}>
                <button onClick={()=>setCommentForUpdate(comment)}>update</button>
                <button onClick={()=>deleteComment()}>delete</button>
            </div>
        </div>
    );
};
export {Comment};