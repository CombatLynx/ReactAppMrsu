import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import MyPosts from "./components/MyPosts/MyPosts";
import {Route, Routes} from "react-router-dom";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <h1>App component</h1>
            <Navbar></Navbar>
            <Routes>
                <Route path='/myPosts' element={<MyPosts messages={props.state.messages}></MyPosts>}></Route>
                <Route path='/header' element={<Header/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
