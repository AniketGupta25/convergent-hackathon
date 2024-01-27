import Navbar from './Navbar/Navbar.js'
import './global.css'
import Home from './Home/Home.js'
import Team from './Team/Team.js'
//import Footer from './components/Footer/Footer.js'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Team/>
    </div>
  );
}

export default App;
