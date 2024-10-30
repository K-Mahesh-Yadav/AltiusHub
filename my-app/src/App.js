import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import NavbarComponent from "./Components/Navbar";
import Home from "./Pages/Home";
import InvoiceDetailComponent from "./Pages/Invoice";

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/InvoiceDetailComponent"
          element={<InvoiceDetailComponent />}
        ></Route>
        {/*  onChangeUser={handleOnLogInUsed} */}
        {/* <Route path={`/:user/ADSTdashboard`} element={<ADSTDashboard />}>
          <Route path="AdrrRequests" element={<Adrr />} />
          <Route path="request" element={<RequestForm />} />
          <Route path="Allreq" element={<Allreq />} />
          <Route path="Transactions" element={<CardList />} />
        </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
