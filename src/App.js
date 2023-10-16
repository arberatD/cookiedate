import logo from './logo.svg';
import './App.css';
import Counter from "./components/Counter"
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { useState, useEffect } from 'react';


function App() {

  const [counter, setCounter] = useState(0)
  const handleClick = () => {
    setCounter(counter + 2)
  }

  const resetCounter = () => {
    setCounter(0)
  }

const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  },[]);

// Datumsausgabe in deutschem Format
const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}.${month}.${year}`;

  return (
<body>
  {/* props für h1Name in Header, so kann Text getauscht werden */}
<Header h1Name="Abi"/>
<Main/>
<button onClick={handleClick} className="btn-hover color-8" type="button" >Click mich!</button>
<h1>Counter: {counter}</h1>
<button onClick={resetCounter} className="btn-hover color-4" type="button" >Reset counter</button>
<h2>Es ist {time.toLocaleTimeString("de-DE")} Uhr am {currentDate}</h2>
 <Footer/>
</body>

  );
}

export default App;
