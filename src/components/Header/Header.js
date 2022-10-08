import {Link} from "react-router-dom";

const Header = () =>{
    return(
        <div>
            <div><Link to={'/'}>Home</Link></div>
            <div><Link to={'/users'}>User Page</Link></div>
            <div><Link to={'/posts'}>Post Page</Link></div>
        </div>
    )
}


export {Header};