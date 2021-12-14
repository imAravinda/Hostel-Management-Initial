import React from "react";
import img from "../../images/unilogo.png";
import {
  FooterContainer,
  FooterTop,
  FooterLogo,
  FooterName,
  FooterBody,
  FooterCompany,
  FooterServices,
  FooterAccount,
  FooterEmail,
  FooterBottom,
  FooterLogo1,
  Logo
} from "./FooterElement";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTop>
       <Logo>  
      <FooterLogo1 src={img} alt="" /> 
      </Logo> 
        <FooterLogo>
          <FooterName>University of Ruhuna</FooterName>
        </FooterLogo>
        <FooterBody>
          <FooterCompany>
            PRIVACY
            
          </FooterCompany>
          <FooterServices>
            SERVICES
            
          </FooterServices>
          <FooterAccount>
            ABOUT OS
            
          </FooterAccount>
          <FooterEmail>
            CONTACT US
            
          </FooterEmail>
        </FooterBody>
      </FooterTop>
      <FooterBottom>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolores quam libero consectetur eum incidunt esse, tempora fugit architecto obcaecati hic temporibus voluptates blanditiis ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae suscipit. Prov fuga dicta modi
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
