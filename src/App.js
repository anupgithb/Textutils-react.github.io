// import logo from './logo.svg';
// 6890
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import React,{useState} from 'react'
import Textform from './components/Textform';
import Alert from './components/Alert';
// import { render } from "react-dom";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

// let name = "Anup";
function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=>{
    if(Mode==='light')
    {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode is enabled!","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode is enabled!","success")
    }
  }
  return (
    <>
    <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode} aboutTextUtils="About"/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Textform heading="Enter text to analyze"  mode={Mode} showAlert={showAlert} />
    </div>
    {/* <BrowserRouter>
<Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode} aboutTextUtils="About"/>
<Alert alert={alert}/>

<div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />}>
            </Route>
            <Route exact path="/" element={<Textform heading="Enter text to analyze"  mode={Mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
  </div>
</BrowserRouter> */}
    </>
  );
}

export default App;
