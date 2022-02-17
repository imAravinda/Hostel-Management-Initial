import img1 from "./../../images/image036.jpg";
import img2 from "./../../images/image038.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";

import {
    Des,
    Sec,
    Slider,
    SubSec,
    Img,
    Sec1,
    ContactInfo,
    H4,
    H1
} from "./AcademicWardensStyle"
const AcademicWardens = () => {
    return (  
        <Des>
            <Sec>
                <H1>Academic Wardens</H1>
            </Sec>
            <Sec>
            <Slider data-aos="zoom-in">
                    <div>
                        <Img src={img1} alt="" />
                    </div>
                    <SubSec>
                        <Sec1>
                            <ContactInfo><H4>Dr. K. A. Sunanda. Kodikara-Arachchi</H4></ContactInfo>
                            <ContactInfo><FontAwesomeIcon icon={faUser}/></ContactInfo>
                            <ContactInfo><FontAwesomeIcon icon={faEnvelope}/></ContactInfo>
                        </Sec1>
                    </SubSec>  
                </Slider>
                <Slider data-aos="zoom-in">
                    <div>
                        <Img src={img2} alt="" />
                    </div>
                    
                    <SubSec>
                        <Sec1>
                            <ContactInfo><H4>Dr. W. S. Hemalika</H4></ContactInfo>
                            <ContactInfo><FontAwesomeIcon icon={faUser}/></ContactInfo>
                            <ContactInfo><FontAwesomeIcon icon={faEnvelope}/></ContactInfo>
                        </Sec1>
                    </SubSec>  
                </Slider>
            </Sec>
        </Des>
    );
}
 
export default AcademicWardens;