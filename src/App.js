import './App.css';
import Home from './screens/Home'
import Layout from '../src/screens/Layout';
import{
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Contact from './screens/Contact';
import About from './screens/About';
import Submit from './screens/Submit'
import Services from './screens/Services';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Services_2 from './screens/Services_2';
import ChatbotComponent from './screens/Chatbot';

function App() {
  return (
    <Router>
      <Layout>
       <Routes>
       <Route exact path="/" element={<Home/>}/>
       <Route exact path="/contact" element={<Contact/>}/>
       <Route exact path="/submit" element={<Submit/>}/>
       <Route exact path="/Services_2" element={<Services_2/>}/>
       <Route exact path="/chatbot" element={<ChatbotComponent/>}/>
       </Routes>
      </Layout>
    </Router>

  );
}

export default App;
