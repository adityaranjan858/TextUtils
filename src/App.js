import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


function App() {
  const [mode, setMode] = useState("light");
  const [alertmsg, setAlertMsg] = useState(false);
  const showMsg = (message, type) => {
    setAlertMsg({
      message,
      type
    })
    setTimeout(() => {
      setAlertMsg(false)
    }, 1500);
  }
  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743"
      showMsg("Dark Mode Enabled", "success")
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white"
      showMsg("Light Mode Enabled", "success")
    }
  }
  return (
    <Router>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={togglemode} />
      <Alert alert={alertmsg} />
      <div className='container my-5'>
        <Routes>
          <Route exact path='/home' element={<TextForm showMsg={showMsg} heading="Try TextUtils - Word Counter, character Counter, Copy Text etc." mode={mode} />}></Route>
          <Route exact path='/about' element={<About mode={mode}/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
