import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import MyPostsContainer from "./components/MyPosts/MyPostsContainer";

const App = (props) => {
    console.log(props)
    return (
        <div className="app-wrapper">
            <div className="app-wrapper__container">
                <Header/>
                <Navbar></Navbar>
                <div className="app-wrapper__content">
                    <Routes>
                        <Route path='/myPosts' element={<MyPostsContainer store={props.store}/>}/>
                        <Route path='/header' element={<Header/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
