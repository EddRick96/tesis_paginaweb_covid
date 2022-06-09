import './styles/App.css';
import React from 'react';
import 'antd/dist/antd.css'
// import { Routes, Route, Link } from "react-router-dom";

import SiderBar from './components/Navs';

function App() {
  return (
    <div className="App">
      <SiderBar />
    </div>
  );
}
export default App;