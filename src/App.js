import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home"
import Weather from "./pages/Weather"
import Navbar from "./components/Navbar"

function App() {

    return(
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/weather" component={Weather} />
                </Switch>
            </div>
        </Router>
    )     
    
}

export default App