// import logo from './logo.svg';
import './App.css';
import { Login } from './Components/Login/Login';
import Main from "./Components/Main/Main"
import { Register } from './Components/Register/Register';

function App() {
  return (
    <div className="App">
      <Main />
      <Login/>
      <Register/>
    </div>
  );
}

export default App;
