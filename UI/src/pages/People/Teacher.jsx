import React from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Card from "../../components/Card/Card.jsx"

function Teacher() {
  const myh1 = {
    paddingTop: "100px",
    paddingBottom: "39px",
    fontSize: "3.5rem",
    fontWeight: "500",
    textTransform: "uppercase",
    textAlign: "center",
  }
  return (
    <div>
      <Navbar></Navbar>
      <h1 style={myh1}>Faculty & Staff</h1>
      <div>
        <Card></Card>
        <Card></Card>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Teacher