import React from "react";
import img from "../../images/unilogo.png";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  FooterContainer,
  FooterSection,
  FooterRightColumn,
  FooterLeftColumn,
  Logo,
  Link1,
  Links,
  HR,
  Text,
  Name,
  H1,
  Image,
  SubSection,
  Span
} from "./FooterElement";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <Logo>
          <Image src={img}/>
        </Logo>
        <Name>
          <H1>University of Ruhuna <br/> Hostel Management System</H1>
        </Name>
      </FooterSection>
      <SubSection>
        <FooterSection>
          <FooterLeftColumn>
            <HR/>
            <Links>
              <Link1 className="FooterLink">
                <Link to = "">
                  Privacy
                <Span className="Ho"></Span>
                </Link>
              </Link1>
              <Link1 className="FooterLink">
                <Link to = "">
                  Services
                <Span className="Ho"></Span>
                </Link>
              </Link1>
              <Link1 className="FooterLink">
                <Link to = "">
                  About Us
                <Span className="Ho"></Span>
                </Link>
              </Link1>
              <Link1 className="FooterLink">
                <Link to = "">
                  Contact Us
                <Span className="Ho"></Span>
                </Link>
              </Link1>
            </Links>
          </FooterLeftColumn>
          <FooterRightColumn>
            <HR/>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eum ea impedit accusamus eius ipsa rerum nemo deserunt similique vitae molestiae, quia possimus dolores blanditiis, sint labore, ad omnis repellat nulla est adipisci? Dignissimos modi exercitationem ducimus illo est itaque?
            </Text>
          </FooterRightColumn>
        </FooterSection>
      </SubSection>
      <FooterSection>
        <p>2021 Department of Computer Science. | All Rights Reserved. </p>
      </FooterSection>
    </FooterContainer>
  );
};

export default Footer;
