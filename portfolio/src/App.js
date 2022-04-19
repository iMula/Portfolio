import './App.css';
import Sidebar from "./components/sidebar"
import {SidebarData} from "./components/SidebarData" 
import Footer from "./components/footer" 
import Intro from "./components/intro/intro"
import Topbar from "./components/topbar/topbar"

function App() {
  return (
    <div className="App">
      {/* <Topbar/> */}
      <Intro/>
      <Sidebar/>
      

      <Footer/>
    </div>
  );
}

export default App;
