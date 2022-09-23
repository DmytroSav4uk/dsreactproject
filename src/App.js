import {Link, Route, Routes} from "react-router-dom";
import Home from "./Components/Home/Home";
import Todos from "./Components/Todos/Todos/Todos";
import Albums from "./Components/Albums/Albums/Albums";
import Comments from "./Components/Comments/Comments/Comments";
import Posts from "./Components/Post/Posts/Posts";
import Post from "./Components/Post/Post/Post";

function App() {
    return (
        <div>

            <ul>
                <li><Link to={'/'}>Home Page</Link></li>
                <li><Link to={'/todos'}>all todos</Link></li>
                <li><Link to={'/albums'}>all albums</Link></li>
                <li><Link to={'/comments'}>all comments</Link></li>
            </ul>

            <hr/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/todos'} element={<Todos/>}/>
                <Route path={'/albums'} element={<Albums/>}/>
                <Route path={'/comments'} element={<Comments/>}/>
                <Route path={'/posts/:id'} element={<Posts/>}/>
            </Routes>
            <hr/>


        </div>)
}

export default App;
