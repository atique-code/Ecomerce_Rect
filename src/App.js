import React from "react";
import MyNavbar from "./components/navbar"
import "./App.css"
import Footer from "./components/footer";
import { Routes, Route } from "react-router-dom";
import Mainpart from "./mainpart"
import About from "./About";
import Shop from "./shop";
import Contact from "./contact";
import Blog from "./blog";


class App extends React.Component {
  render() {
    return (
      <>
        <MyNavbar />
        
        <Routes>
          <Route path="/" element={<Mainpart />} />
          <Route path="/About" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />

        </Routes>
        <Footer />

      </>

    )
  }
}

export default App;