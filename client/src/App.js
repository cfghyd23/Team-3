import './App.css';
import ChildDashboard from './Components/ChildDashboard/ChildDashboard';
import Feedcard from './Components/Feedcard/Feedcard';
import Main from "./Components/Main/Main"
import { Route, Navigate , BrowserRouter, Routes } from "react-router-dom";
import AboutUs from './Components/AboutUs/AboutUs'
import React ,{useState} from 'react';
import ContactForm from './Components/ContactForm/ContactForm'
import FeedPlaceholder from './Components/FeedPlaceholder/FeedPlaceholder';
import RequestPlaceholder from  './Components/RequestPlaceholder/RequestPlaceholder'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Donate from './Components/Donate/Donate';
import {Login} from './Components/Login/Login'
import { StudentRegister } from './Components/Register/StudentRegister';
import MemberRegister from './Components/Register/MemberRegister';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const email = localStorage.getItem('email');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  const renderForm = () => {
    switch (currentForm) {
      case 'login':
        return <Login onFormSwitch={toggleForm} />;
      case 'register':
        return <MemberRegister onFormSwitch={toggleForm} />;
      case 'studentregister':
        return <StudentRegister onFormSwitch={toggleForm} />;
      default:
        return <Login onFormSwitch={toggleForm} />;
    }
  }


  return (
    <div className="App">
       <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={!email ? <div>{renderForm()}</div> : <Navigate to="/dashboard" />} />
            <Route path="/register" element={!email ? <MemberRegister /> : <Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={!email ? <Main/> : <ChildDashboard/>} />
            <Route path="/donate" element={<Donate/>} />
            <Route path="/about" element={<AboutUs/>} />
            <Route path="/contact" element={<ContactForm/>} />
            
       {/* <Feedcard title="Feed Title" description="Title description comes here" tags="Fun Facts"/> */}
       {/* <Feedcard /> */}
       {/* <ChildDashboard/> */}
       {/* <FeedPlaceholder/> */}
       {/* <RequestPlaceholder/> */}

       </Routes>
    </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
