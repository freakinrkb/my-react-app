// import logo from './logo.svg';
import './App.css';
import Main from './components/main'
import Navbar from'./components/navbar'
function App() {
  return (
    <div>
      <img src='/logo192.png' alt = "REACT" width = "40px" />
      <h1>Fun facts about React</h1>
      <ul>
            <Navbar/>
            <Main  />
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>

  );
}

export default App;












