
import './App.css';
//import FormDialog from "./components/FormDialog";
//import Customization from "./components/Customization";
import React from 'react';
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import {Route,Routes} from "react-router"
import Home from "./components/pages/Home";


function App() {
    return (
        <div className="App">
            <ResponsiveAppBar/>
            <Routes>

                <Route path="/"   element ={<Home/>}/>
                <Route path="/Products"   element ={<Home/>}/>

            </Routes>

        </div>
    );
}

export default App;


/*
  <FormDialog title={"a1"}/>
            <FormDialog title={"x2"}/>

 */