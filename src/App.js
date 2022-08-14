import './App.css';
import React, { useState } from "react";

function App() {

  const [inches, setInches] = useState("");
  const [millimeters, setMillimeters] = useState("");
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);
  const [atm, setAtm] = useState("");
  const [bar, setBar] = useState("");
  const [nm, setNm] = useState("")
 
  const submit = (e) => {
    e.preventDefault();
    const formValid = +inches >= 0;
    if (!formValid) {
      alert("Input is invalid!");
    }
  };

  return (
    <div>
      <h1 className="App-header">Unit Converter</h1>
      <form onSubmit={submit}>
        <div>
          <h2>Distance</h2>
          {/* Convert inches to mm */}
          <label>Inches</label>
          <input value={inches} 
          onChange={(e) => setInches(e.target.value)}/>
          <b>{parseFloat((inches*25.4).toFixed(4))} mm</b>
          {/* <button type="submit">Convert to mm</button> */}
        </div>

        <div>
          {/* Convert mm to inches */}
          <label>Millimeters</label>
          <input value={millimeters} 
          onChange={(e) => setMillimeters(e.target.value)}/>
          <b>{parseFloat((millimeters/25.4).toFixed(4))} inches</b>
          {/* <button type="submit">Convert to inches</button> */}
        </div><br></br>
        
        <h2>Temperature</h2>
        <div>
          {/* Convert Celsius to Fahrenheit  */}
          <label>Celsius</label>
          <input value={celsius} 
          onChange={(e) => setCelsius(e.target.value)}/>
          <b>{parseFloat(((celsius*1.8)+32).toFixed(2))} fahrenheit</b> 
        </div>

        <div>
          {/* Convert Fahrenheit to Celsius  */}
          <label>Fahrenheit</label>
          <input value={fahrenheit} 
          onChange={(e) => setFahrenheit(e.target.value)}/>
          <b>{parseFloat(((fahrenheit-32)*.5556).toFixed(2))} celsius</b> 
        </div><br></br>

        <h2>Pressure / Torque</h2>
        <div>
          {/* Convert atm to psi  */}
          <label>atm</label>
          <input value={atm} 
          onChange={(e) => setAtm(e.target.value)}/>
          <b>{parseFloat((atm*14.696).toFixed(2))} psi</b>
        </div>

        <div>
          {/* Convert bar to psi  */}
          <label>Bar</label>
          <input value={bar} 
          onChange={(e) => setBar(e.target.value)}/>
          <b>{parseFloat((bar*14.504).toFixed(2))} psi</b>
        </div>
        
        <div>
          {/* Convert Nm to ft-lb  */}
          <label>Nm</label>
          <input value={nm} 
          onChange={(e) => setNm(e.target.value)}/>
          <b>{parseFloat((nm/1.3558).toFixed(3))} ft-lbs</b>
        </div><br></br>
      </form>
    </div>
  );
}

export default App;
