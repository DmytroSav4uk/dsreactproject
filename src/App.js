import {Header} from "./components/Header/Header"
import {Users} from "./components/Users/Users";
import {Posts} from "./components/Posts/Posts";
import {UserDetails} from "./components/Users/UserDetails";
import {PostDetails} from "./components/Posts/PostDeatails";

import {Route, Routes} from "react-router-dom";



function App() {
    return (
        <div>
            <div>
                <Header/>
            </div>

            <div>
                <Routes>
                    <Route path={'/users'} element={<UserDetails/>}/>
                    <Route path={'/posts'} element={<PostDetails/>}/>
                </Routes>
            </div>

            <div>
                <Routes>
                    {/*<Route path={'/users'} element={<UserDetails/>}/>*/}
                    <Route path={'/users'} element={<Users/>}/>
                    <Route path={'/posts'} element={<Posts/>}/>
                </Routes>
            </div>
        </div>)
}

export default App;
