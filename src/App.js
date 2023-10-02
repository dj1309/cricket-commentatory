
// import "./App.css";
// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

  
// import Home component
import Index1 from "./index1";
// import About component
import Main from "./Main";
import Organizermain from "./Organizermain";
import OrganizerSignup from "./Organizersignup";
import Organizerlogin from "./Organizerlogin";
import Login from "./login";
// import ContactUs component
import SignUp from "./signup";
import Tournament  from "./Tournament";
import AddTournament from "./AddTournament";
import Match from "./Match";
import Addmatches from "./Addmatches";
import Addteams from "./Addteams"
function App() {
  return (
    <>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Routes>
          <Route />
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route  exact path="/" element={ <Index1/>} />
         
          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
           <Route path="/Main.html" element={ <Main />} />
          <Route path="/Organizermain.html" element={ <Organizermain/>} />
          <Route path="/signupuser.html" element={ <SignUp />} />
            
          {/* This route is for contactus component
          with exact path "/contactus", in 
          component props we passes the imported component*/}
          <Route path="/Organizersignup.html" element={ <OrganizerSignup/>} />
          <Route path="/Organizerlogin.html" element={ <Organizerlogin/>} />
          <Route path="/login.html" element={ <Login />} />
          
          <Route path="/tournaments" element= { <Tournament />} />
          <Route path="/matches" element= { <Match />} />
          <Route path="/AddTournament.html" element= { <AddTournament />} />
          <Route path="/Addteams.html" element= { <Addteams />} />
          <Route path="/Addmatches.html" element={<Addmatches/>}/>
          {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
        </Routes>
        </Router>
    </>
  );
}
  
export default App;