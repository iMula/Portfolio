import './App.css';
import Sidebar from "./components/sidebar"
import {SidebarData} from "./components/SidebarData" 
import Footer from "./components/footer" 
import Intro from "./components/intro/intro"

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Intro/>

      <Footer/>
    </div>
  );
}

export default App;
