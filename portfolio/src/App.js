import './App.css';
import Data from "./projects.json"
import Sidebar from "./components/sidebar"
import {SidebarData} from "./components/SidebarData" 
import Footer from "./components/footer" 
import Intro from "./components/intro/intro"
import Topbar from "./components/topbar/topbar"
import Projects from "./components/projects/projects"
import Contact from "./components/contact/contact"

function App() {
  return (
    <div className="App">
      <Topbar/>
      <Intro/>
      <Projects Data = {Data}/>
      <Contact/>
      {/* <Sidebar/> */}
      

      <Footer/>
    </div>
  );
}

export default App;
