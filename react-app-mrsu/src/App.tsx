import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import MyPostsContainer from "./components/MyPosts/MyPostsContainer";
import {FC} from "react";
import UsersPage from "./components/Users/UsersPage";

const App: FC = () => {
    return (
        <div className="app-wrapper">
            <div className="app-wrapper__container">
                <Header/>
                <Navbar></Navbar>
                <div className="app-wrapper__content">
                    <Routes>
                        <Route path='/myPosts' element={<MyPostsContainer/>}/>
                        <Route path='/header' element={<Header/>}/>
                        <Route path='/users' element={<UsersPage/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
