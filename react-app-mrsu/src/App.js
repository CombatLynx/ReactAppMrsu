import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import MyPosts from "./components/MyPosts/MyPosts";
import {Route, Routes} from "react-router-dom";

const App = (props) => {
    console.log(props)
    return (
        <div className="app-wrapper">
            <div className="app-wrapper__container">
                <Header/>
                <Navbar></Navbar>
                <div className="app-wrapper__content">
                    <Routes>
                        <Route path='/myPosts' element={<MyPosts
                            messages={props.state.messages}
                           />}>
                        </Route>
                        <Route path='/header' element={<Header/>}></Route>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
