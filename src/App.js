import React, { useState } from "react";
import 'reactjs-popup/dist/index.css';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";

import Home from './components/Home';
function App() {
  const [errorMessage] = useState('');
  return (
   <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home errorMessage={errorMessage}/>}></Route>
      </Routes>   
    </BrowserRouter>
  );
}



export default App;