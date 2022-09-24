import {Link, Route, Routes} from "react-router-dom";
import Home from "./Components/Home/Home";
import Todos from "./Components/Todos/Todos/Todos";
import Albums from "./Components/Albums/Albums/Albums";
import Comments from "./Components/Comments/Comments/Comments";
import Posts from "./Components/Post/Posts/Posts";
import css from "./App.module.css"


function App() {
    return (
        <div >
            <div className={css.controller}>
            <ul>
                <li><Link to={'/'}>Home Page</Link></li>
                <li><Link to={'/todos'}>all todos</Link></li>
                <li><Link to={'/albums'}>all albums</Link></li>
                <li><Link to={'/comments'}>all comments</Link></li>
            </ul>
            </div>

            <div className={css.main}>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/todos'} element={<Todos/>}/>
                    <Route path={'/albums'} element={<Albums/>}/>
                    <Route path={'/comments'} element={<Comments/>}/>
                    <Route path={'/comments/:id/posts'} element={<Posts/>}/>
                </Routes>
            </div>

        </div>)
}

export default App;
