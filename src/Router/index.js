import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components";
import TableData from "../components/Tables/tableData";
import Dashboard from "../components/Dash/dash";


function RoutesApp(props) {
  return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/tabla" element={<TableData numberProvince={props.numberProvince}/>} />
        <Route exact path="/dashboard" element={<Dashboard ></Dashboard>}/>
      </Routes>
  );
}

export default RoutesApp