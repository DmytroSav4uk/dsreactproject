import {Link} from "react-router-dom";

import css from "../components.module.css"

const Header = () =>{
    return(
        <div className={css.links}>
            <div><Link to={'/'}>Home</Link></div>
            <div><Link to={'/users'}>User Page</Link></div>
            <div><Link to={'/posts'}>Post Page</Link></div>
        </div>
    )
}


export {Header};