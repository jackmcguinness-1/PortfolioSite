import { useState } from 'react'
import logo from './logo.svg'
import {NavigationBar} from "./components/view/NavigationBar";
import './App.css'
import {
    BrowserRouter as Router,
    useRoutes
} from "react-router-dom";
import {FunctionComponent} from "react";
import {routes} from "./routes/routes";
import tw from "tailwind-styled-components";

const Entry: FunctionComponent = () => {
  const element = useRoutes(routes);

  return (
    <div>
      {element}
    </div>
  )
}



function App() {

  return(

    <Router>
        <Entry />
    </Router>

  ) 
}

export default App
