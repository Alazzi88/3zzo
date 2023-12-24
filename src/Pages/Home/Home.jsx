import "./Home.css";
import React from "react";
import Photoo from "../Home/photoAndVideo/photoAndVideo";
import Service from "./service/services";
import FloatingActionButton from "../../comp/FloatingActionButton/FloatingActionButton";
import Footer from "../../comp/footer/footer";
import Projects from "../Projects/Projects";

const Home = () => {
  return (
    <div>
      {/* <Carousell/> */}
      <Photoo />
      <Service />
      <Projects />
      <FloatingActionButton />
      <Footer />
    </div>
  );
};

export default Home;
