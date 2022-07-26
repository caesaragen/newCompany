import React from "react";
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from "./ServicesElements";
import Icon1 from "../../images/space.svg"
import Icon2 from "../../images/online.svg"
import Icon3 from "../../images/real-time.svg"

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Web Development</ServicesH2>
          <ServicesP>
            Full stack web development is a combination of front-end and back-end development. We use the latest technologies to create a robust and user-friendly web application.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Mobile Development</ServicesH2>
          <ServicesP>
            We develop cross platform mobile applications using the latest technologies. We use the latest technologies to create a write once use everywhere approach to minimize development times.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Software Support</ServicesH2>
          <ServicesP>
            Need help maintaining your software? We can help you with any issues you have with your software including migrating to new technology stacks, fixing bugs, adding features and providing support.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
