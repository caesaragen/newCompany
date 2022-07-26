import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import { InfoContainer, InfoWrapper, Subtitle, Title } from "./InfoElements";
import { ButtonBasic } from "../ButtonElements";
import Lottie from "lottie-react";
// import image1Animation from "../../lottie/animation_l626fpry.json";

export const InfoSection = ({ id, title, subtitle, text, image, btnText, imageAnimation }) => {
  
  return (
    <>
      <InfoContainer id={id} className="bg-black">
        <InfoWrapper>
          <div className="row expand-row gx-5">
            <div className="col-lg-6 col-sm-12 my-auto">
              <Subtitle>{subtitle}</Subtitle>
              <Title className="text-white mb-5">{title}</Title>
              <p className="text-white mb-4">{text}</p>
              <ButtonBasic to="" primary="true" dark="true" className="mx-auto">
                {btnText}
              </ButtonBasic>
            </div>
            <div className="col-lg-6 col-sm-12 img-wrap">
              {/* <img src={image} alt="" className="fit-img"></img> */}
              <Lottie options={{ loop: false }} animationData={imageAnimation} />
            </div>
          </div>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
