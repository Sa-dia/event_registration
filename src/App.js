// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
// import BookList from './Component/BookList';
// import Book from './Component/Book';
import HomePage from './Component/HomePage';
import Combine from './Component/Combine';
import Navbar from './Component/Navbar';
import AboutUs from './Component/AboutUs';
import ContactUs from './Component/ContactUs';
import Login from './Component/Login';
import Registration from './Component/Registration';
import ForgetPassword from './Component/ForgetPassword';
import OTP from './Component/OTP';
import RegistrationForWebsite from './Component/RegistrationForWebsite';
import EditForm from './Component/EditForm';
import UsernameForm from './Component/UsernameForm';
import Gallery from './Component/Gallery';
import FormSummary from './Component/FormSummary';
import ModificationForm from './Component/ModificationForm'
import EventSummary from './Component/EventSummary'
import GroupRegistration from './Component/GroupRegistration'
import DeleteRecord from './Component/DeleteRecord'
import Individual from './Component/Individual'
import IndividualSummary from './Component/IndividualSummary'
import Group from './Component/Group'
import GroupEvent from './Component/GroupEvent'
import GroupEventSummary from './Component/GroupEventSummary'
import RegisteredMembers from './Component/RegisteredMembers'
import AdminLogin from './Component/AdminLogin'
// import GroupRegistration from './Component/GroupRegistration'
function App() {
  return (
  /*  <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
    // path name by which can access the page // element whose component to use
    // use for linking 
  
  <Router>
    <Navbar/>
    <Routes>
     <Route path="/" element={<HomePage/>}/>
     <Route path="/mainpage" element={<Combine/>}/>
     <Route path="/about-us" element={<AboutUs/>}/>
      <Route path="/contact-us" element={<ContactUs/>}/>
      <Route path="/login" element={<Login/>}/> 
      <Route path="/registration" element={<Registration/>}/>
      <Route path="/forget-password" element={<ForgetPassword/>}/>
      <Route path="/otp" element={<OTP/>}/>
      <Route path="/registration-for-website" element={<RegistrationForWebsite/>}/>
      <Route path="/username-form" element={<UsernameForm/>}/>
      <Route path="/edit-form" element={<EditForm/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/FormSummary" element={<FormSummary/>}/>
      <Route path="/ModificationForm" element={<ModificationForm/>}/>
      <Route path="/EventSummary" element={<EventSummary/>}/>
      <Route path="/GroupRegistration" element={<GroupRegistration/>}/>
      <Route path="/DeleteRecord" element={<DeleteRecord/>}/>
      <Route path="/Individual" element={<Individual/>}/>
      <Route path="/IndividualSummary" element={<IndividualSummary/>}/>
      <Route path="/Group" element={<Group/>}/>
      <Route path="/GroupEvent" element={<GroupEvent/>}/>
      <Route path="/GroupEventSummary" element={<GroupEventSummary/>}/>
      <Route path="/RegisteredMembers" element={<RegisteredMembers/>}/>
      <Route path="/AdminLogin" element={<AdminLogin/>}/>
      

    </Routes>
  </Router>

  );
}

export default App;
