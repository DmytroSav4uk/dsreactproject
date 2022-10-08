import {Header} from "./components/Header/Header"
import {Users} from "./components/Users/Users";
import {Posts} from "./components/Posts/Posts";

import {Route, Routes} from "react-router-dom";
import {UserDetails} from "./components/Users/UserDetails";

function App() {
    return (
        <div>
            <div>
                <Header/>
            </div>

            <div>
                <Routes>
                    <Route path={'/users'} element={<UserDetails/>}/>
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
