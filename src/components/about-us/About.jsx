import React from "react";
import { Header, Footer } from "../homepage";
import Section from "./Section";
import AboutMain from "./AboutMain";
import AboutTwo from "./AboutTwo";

const About = () => {
  return (
    <>
      <Header />
      <AboutMain />
      <AboutTwo />
      <AboutMain />
      <AboutTwo/>
      <Section />
      <Footer />
    </>
  );
};

export default About;
