import React, { useState } from "react";
import HeroSection from "../components/heroSection";
import InfoSection from "../components/infoSection";
import { Navbar } from "./../components/navbar";
import { Sidebar } from "./../components/sidebar";

import Image1 from "../images/design-notes.svg";
import Image2 from "../images/space.svg";
import InfoSectionLight from "../components/infoSectionLight";
import Services from "../components/services";
import Footer from "../components/footer";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection
        image={Image1}
        id="about"
        subtitle="Get to know us"
        title="About US"
        text="We are a team of Full Stack Web and Mobile developers who are passionate about building great products without the hassle of the development process. We are here to help you build your next product."
        btnText="Start today"
      />
      <InfoSectionLight
        image={Image2}
        id="discover"
        subtitle="Discover our services"
        title="Discover"
        text="We provide a wide range of services to help you build your next product. We are here to help you build your next product."
        btnText="Explore"
      />
      <Services />
      <InfoSectionLight
        image={Image1}
        id="#"
        subtitle="Based on an Agile approach and a strong focus on the user experience"
        title="Our Development Process"
        text="We emphasize on the user experience and the development process. We use the Agile methodology and continuos integration to ensure the client and the user are a part of the process."
        btnText="Read more"
      />
      <Footer />
    </>
  );
};
