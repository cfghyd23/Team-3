// import logo from './logo.svg';
import './App.css';
import ChildDashboard from './Components/ChildDashboard/ChildDashboard';
import Feedcard from './Components/Feedcard/Feedcard';
import { Login } from './Components/Login/Login';
import Main from "./Components/Main/Main"
import { MemberRegister } from './Components/Register/MemberRegister';
import { StudentRegister } from './Components/Register/StudentRegister';
import { Routes, Route, Navigate , BrowserRouter } from "react-router-dom";


// V 
import ContactForm from './Components/ContactForm/ContactForm'
import FeedPlaceholder from './Components/FeedPlaceholder/FeedPlaceholder';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


import 'mdb-react-ui-kit/dist/css/mdb.min.css';

function App() {
  return (
    <div className="App">
      {/* <Routes>

      <Route path="/" exact element={<Main />} />
      <Route path="/login" exact element={<Login />} />
      <Route path="/Register" exact element={<MemberRegister />} />
      </Routes>
       */}
       {/* <Main/> */}
       {/* <Feedcard title="Feed Title" description="Title description comes here" tags="Fun Facts"/> */}
       {/* <Feedcard /> */}
       {/* <ChildDashboard/> */}
       {/* <MemberRegister/> */}
       {/* <StudentRegister/> */}

       <ContactForm/>
       {/* <FeedPlaceholder/> */}
    </div>
  );
}

export default App;
