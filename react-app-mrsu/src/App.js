import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

const App = (props) => {
  return (
    <div className="App-wrapper">
        <h1>App component</h1>
        <Header></Header>
        <Navbar></Navbar>
    </div>
  );
}

export default App;
