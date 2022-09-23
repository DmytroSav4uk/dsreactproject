import {Link} from "react-router-dom";


export default function Comment(props) {



    const {postId, name, email, body} = props

        return (
            <div>
                <h4>name:{name}</h4>
                <h4>email:{email}</h4>
                <p>{body}</p>
                <Link to={'/posts/'+ postId} >Show post</Link>
            </div>)

}
