import React , {useState} from "react" ; 
import logo from './logo.svg';
import './App.css';
import Celsius from "./components/Celsius"
import Fahrenheit from './components/Fahrenheit';

const tempConverter = (tempInC) => {
  const input = parseFloat(tempInC);
  if (Number.isNaN(input)) {
    return '';
  }
  const output =  (input * 9 / 5) + 32;
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function App() {
  const [temp , setTemp] = useState("");  

  const getTempCelsius = (tempInC) => {
    // console.log(tempInC) ;
    setTemp(tempConverter(tempInC)) ; 
  }
  return (
    <div className="App">
      <Celsius onSelectTemp = {getTempCelsius}></Celsius>
      <Fahrenheit temp = {temp}></Fahrenheit>
    </div>
  );
}

export default App;
