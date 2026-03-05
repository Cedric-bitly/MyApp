import logo from './logo.svg';
import './App.css';
import Firstcomponent from './components/Firstcomponent';
import Secondcomponent from './components/Secondcomponent';
import ContactUs from './components/ContactUs';
import HelpCenter from './components/Help';
import Thirdcomponent from './components/Thirdcomponent';
import Fourthcomponent from './components/Fourthcomponent';
import Fifthcomponent from './components/Fifthcomponent';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1> Welcome to app react</h1>
       <h2>React is Fun</h2>


      </header>
      {/* Below we render/display/show our components */}
        <Firstcomponent />
        <Secondcomponent />
        <ContactUs/>
        <HelpCenter/>
        <Thirdcomponent/>
        <Fourthcomponent/>
        <Fifthcomponent/>
    </div>
  );
}

export default App;

// jsx

// Create two other components i.e: ContactUs and Help components and style them with your own content
// npm => Node Package Manager
// npx => Node Package Execute

//  App.js is our root component