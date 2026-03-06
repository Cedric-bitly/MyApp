import logo from './logo.svg';
import './App.css';
import Firstcomponent from './components/Firstcomponent';
import Secondcomponent from './components/Secondcomponent';
import ContactUs from './components/ContactUs';
import HelpCenter from './components/Help';
import Thirdcomponent from './components/Thirdcomponent';
import Fourthcomponent from './components/Fourthcomponent';
import Fifthcomponent from './components/Fifthcomponent';
import Sixthcomponent from './components/Sixthcomponent';
import Notfound from './components/Notfound';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';








function App() {
  return (
   <Router>
    <div className="App">

      <nav>
        <Link to="/first">First Component</Link>
        <Link to="/second">Second Component</Link>
        <Link to="/third">Third Component</Link>
        <Link to="/fourth">Fourth Component</Link>
        <Link to="/fifth">Fifth Component</Link>
        <Link to="/sixth">Sixth Component</Link>
        <Link to="/help">Help Center</Link>
        <Link to="/contactus">Contact Us</Link>
        
      </nav>

      <header className="App-header">
       <h1> Welcome to app react</h1>
       <h2>React is Fun</h2>


      </header>
      {/* Below we render/display/show our components */}
      <Routes>
        <Route path="/help" element={<HelpCenter />}/>
        <Route path="/first" element={<Firstcomponent />} />
        <Route path="/second" element={<Secondcomponent />} />
        <Route path="/third" element={<Thirdcomponent />} />
        <Route path="/contactUs" element={<ContactUs />}/>
        <Route path="/fourth" element={<Fourthcomponent />}/>
        <Route path="/fifth" element={<Fifthcomponent />}/>
        <Route path="/sixth" element={<Sixthcomponent />}/>
        <Route path="*" element={<Notfound />}/>
      </Routes>

    </div>
   </Router> 
  );
}

export default App;

// jsx

// Create two other components i.e: ContactUs and Help components and style them with your own content
// npm => Node Package Manager
// npx => Node Package Execute

//  App.js is our root component