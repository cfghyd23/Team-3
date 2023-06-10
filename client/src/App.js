// import logo from './logo.svg';
// import './App.css';
import ChildDashboard from './Components/ChildDashboard/ChildDashboard';
import Feedcard from './Components/Feedcard/Feedcard';
// import { Login } from './Components/Login/Login';
import Main from "./Components/Main/Main"
// import { MemberRegister } from './Components/Register/MemberRegister';
// import { StudentRegister } from './Components/Register/StudentRegister';
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import AboutUs from './Components/AboutUs/AboutUs'
import React, { useState } from 'react';
// V 
import ContactForm from './Components/ContactForm/ContactForm'
import FeedPlaceholder from './Components/FeedPlaceholder/FeedPlaceholder';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import RequestPlaceholder from './Components/RequestPlaceholder/RequestPlaceholder'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Donate from './Components/Donate/Donate';


import Mylogin from './Components/Mylogin/Mylogin'

// import {Login} from './Components/Login/Login'
// import { StudentRegister } from './Components/Register/StudentRegister';
// import MemberRegister from './Components/Register/MemberRegister';

function App() {
  // const [currentForm, setCurrentForm] = useState('login');

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // }

  // const renderForm = () => {
  //   switch (currentForm) {
  //     case 'login':
  //       return <Login onFormSwitch={toggleForm} />;
  //     case 'register':
  //       return <MemberRegister onFormSwitch={toggleForm} />;
  //     case 'studentregister':
  //       return <StudentRegister onFormSwitch={toggleForm} />;
  //     default:
  //       return <Login onFormSwitch={toggleForm} />;
  //   }
  // }


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

      {/* <ContactForm/> */}
      {/* <FeedPlaceholder/> */}

      <AboutUs/>
       {/* <Mylogin /> */}

      {/* H  */}
      {/* <RequestPlaceholder/> */}
      {/* <AboutUs/> */}
      {/* <Donate/> */}

      {/* {renderForm()} */}
    </div>
  );
}

export default App;
