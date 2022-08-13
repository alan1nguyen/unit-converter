import './App.css';
import React, { useState } from "react";

function App() {

  const [inches, setInches] = useState(0);
  const [mmToInch, setmmToInch] = useState(0);
  const [millimeters, setMillimeters] = useState(0);
  const [inchToMillimeter, setinchToMillimeter ] = useState(0);

  const submit = (e) => {
    e.preventDefault();
    const formValid = +inches >= 0;
    if (!formValid) {
      alert("Input is invalid!");
    }
    setinchToMillimeter(inches*25.4);
    setmmToInch(millimeters/25.4);
    //setCentimeters((+feet + +inches / 12) * 12 * 2.54);
  };

  return (
    <div>
      <h1>Unit Converter</h1>
      <form onSubmit={submit}>
        <div>
          <label>Inches</label>
          <input value={inches} onChange={(e) => setInches(e.target.value)} />
          <button type="submit">Convert to mm</button>
        </div>
        <p>{parseFloat(inchToMillimeter.toFixed(4))} mm</p>

        <div>
          <label>Millimeters</label>
          <input value={millimeters} onChange={(e) => setMillimeters(e.target.value)} />
          <button type="submit">Convert to inches</button>
        </div>
        <p>{parseFloat(mmToInch.toFixed(4))} inches</p>

      </form>
    </div>
  );
}

export default App;
