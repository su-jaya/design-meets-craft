import React from 'react';
import './App.css';
import Registration from "./components/signup/Registration"
import {Route, Switch} from "react-router-dom"
import AboutYou1 from './components/signup/AboutYou1';
import Needs1 from './components/signup/Needs1';
import Home from "./components/home/Home";


function App() {

return (
 <div className="App">
<Home />

<Switch>
<Route path={"/signup"} component={Registration} />
<Route path={"/aboutyou1"} component={AboutYou1} />
<Route path={"/needs1"} component={Needs1} />
</Switch>

</div> 
)

}


export default App;
