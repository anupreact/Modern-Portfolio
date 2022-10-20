import React from "react";
import About from "../components/Home/AboutContent";
import AboutTech from "../components/Home/AboutTech";
import Contacts from "../components/Home/Contacts";
import Hero from "../components/Home/Hero";
import Project from "../components/Home/Project";
import Service from "../components/Home/Service";
import { useScroll } from "../components/useScroll";
import hero_image from "../images/hero.png";
import { useEffect, useState } from "react";
import { Button, Result } from "antd";
import { NavLink } from "react-router-dom";


const Home = () => {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 2000);
  }, []);

  const [element, controls] = useScroll();

  return (
    <>
      {load ? (
          "Loader"
      ) : (
        <main className="home_container" ref={element}>
          {/* HERO SECTION STARTED */}
          <Hero />

          <AboutTech />
          {/* HERO SECTION ENDED */}
          {/* SERVICES SECTION STARTED */}
          <Service heading={true} />
          {/* SERVICES SECTION ENDED */}
          {/* PROJECTS SECTION STARTED */}
          <Project heading={true} />
          {/* PROJECTS SECTION ENDED */}
          {/* // ABOUT SECTION STARTED */}
          <About heading={true} techIntro={false} />
          {/* // ABOUT SECTION ENDED */}
          {/* // CONTACT SECTION STARTED */}
          <Contacts heading={true} />
          {/* // CONTACT SECTION ENDED */}
        </main>
      )}
    </>
  );
};

export default Home;
