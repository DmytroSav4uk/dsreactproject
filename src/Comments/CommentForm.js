import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi"
import {useEffect} from "react";

import {commentValidator} from "../Validators/Comment.validator";
import {commentService} from "../Services/Comment.service";



const CommentForm = ({setComments, commentForUpdate, setCommentForUpdate}) =>{
    const {register, handleSubmit, reset ,formState:{errors, isValid},setValue} = useForm({
        resolver:joiResolver(commentValidator),
        mode:'all'
    });

    useEffect(() => {
        if (commentForUpdate) {
            setValue('name', commentForUpdate.name, {shouldValidate: true})
            setValue('email', commentForUpdate.email, {shouldValidate: true})
            setValue('body',commentForUpdate.body, {shouldValidate: true})
        }
    }, [commentForUpdate, setValue])


    const submit = async (comment) => {
        if (commentForUpdate) {
            const {data} = await commentService.updateById(commentForUpdate.id, comment);
            setComments((comments) => {
                const findComment = comments.find(value => value.id === commentForUpdate.id);
                Object.assign(findComment, data)
                setCommentForUpdate(null)
                return [...comments]
            })
        } else {
            const {data} = await commentService.create(comment);
            setComments(comments => [...comments, data])
        }

        reset()
    }
    return(
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            {errors.name && <span>{errors.name.message}</span>}
            <input type="text" placeholder={'enter your email'} {...register('email')}/>
            {errors.email && <span>{'email example: user@gmail.com'}</span>}
            <input type="text" placeholder={'comment'} {...register('body')}/>
            {errors.body && <span>{errors.body.message}</span>}
            <button  disabled={!isValid}>{commentForUpdate ? 'save and update':'save and add'}</button>
        </form>)}

export {CommentForm};