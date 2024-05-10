// import logo from './logo.svg';
// import './App.css';
// import Button from "./Button";
// import styles from "./App.module.css";
// import {useState, useEffect} from "react";
// import Movie from "./components/Movie";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

// function Hello() {
  // function byFn() {
  //   console.log("bye :(");
  // }
  // function hiFn() {
  //   console.log("created :)");
  //   return byFn;
  // }
  // useEffect(hiFn, []);

//   useEffect(() => {
//     console.log("created :)");
//     return () => console.log("bye :(");
//   }, []);
//   return <h1>Hello</h1>
// }

function App() {
/* useEffect
  const [cnt, setCnt] = useState(0);
  const onClick = () => setCnt(prev => prev + 1);

  const [word, setWord] = useState("");
  const onChng = (event) => setWord(event.target.value);

  useEffect(() => {
    console.log("only once");
  }, []);
  useEffect(() => {
    if (word !== "" && word.length > 5) {
      console.log("Search for ", word);
    }
  }, [word]);

  console.log("all time");

  return (
    <div>
      <input value={word} onChange={onChng} type="text" placeholder="Search here..." />
      <h1>{cnt}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
*/

/* cleanup
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing(prev => !prev)

  return (
    <div>
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
      {showing ? <Hello/> : null}
    </div>
  )
*/

/* to do
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos(curArr => [toDo, ...curArr]);
    setToDo("");
  };

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input value={toDo} onChange={onChange} type="text" placeholder="Write your to do ..."/>
        <button>Add To Do</button>
      </form>
      <hr></hr>
      <ul>
        {toDos.map((arg, idx) => (
          <li key={idx}>{arg}</li>
        ))}
      </ul>
    </div>
  );
*/

/* bit coin
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers").then(Response => Response.json()).then((json) => {
      setCoins(json);
      setLoading(false);
  });
  }, [])

  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? <strong>Loading...</strong> : null}
      <ul>
        {coins.map((coin) => <li>{coin.name} ({coin.symbol}): ${coin.quotes.USD.price}</li>)}
      </ul>
    </div>
  );
*/

/* movie*/
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
