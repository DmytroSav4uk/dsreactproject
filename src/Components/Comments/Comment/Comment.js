import {Link} from "react-router-dom";
import css from "../../CSS/components.module.css"

export default function Comment(props) {



    const { postId, name, email, body} = props

        return (
            <div className={css.element}>
                <h4>name:{name}</h4>
                <h4>email:{email}</h4>
                <Link to={ '/comments/'+ postId +'/posts'} >Show post</Link>
                {/*<Link to={ '/posts/' + postId} >Show post</Link>*/}
            </div>)

}
