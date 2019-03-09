import React from 'react';
import './App.css';
import Registration from "./components/signup/Registration"
import {Route, Switch} from "react-router-dom"
import AboutYou from './components/signup/AboutYou';
import Needs from './components/signup/Needs';
import Home from "./components/home/Home";


function App() {

return (
 <div className="App">

<Switch>
<Route exact path="/" component={Home} />
<Route path="/signup" component={Registration} />
<Route path="/aboutyou" component={AboutYou} />
<Route path="/needs" component={Needs} />
</Switch>

</div> 
)

}


export default App;
