import './App.css';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import About from "./pages/About";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <Link to="/">
            <li><span>Home</span></li>
          </Link>
          <Link to="/gallery">
            <li><span>Gallery</span></li>
          </Link>
          <Link to="about">
            <li><span>About</span></li>
          </Link>
        </ul>
        <Switch>
          <Route exact path="/">
            home
          </Route>
          <Route exact path="/gallery">
            {/* {datas.map((data)=>{
              return <Gallery key={data.id} data={data}/>
            })} */}
            <Gallery/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
