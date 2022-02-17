
import 'react-owl-carousel2/lib/styles.css';
import 'react-owl-carousel2/src/owl.theme.default.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import img1 from "./../../images/warden1.jpg";
import img2 from "./../../images/warden2.jpg";
import img3 from "./../../images/warden3.jpg"
import img4 from "./../../images/warden4.jpg"
import img5 from "./../../images/warden5.jpg"
import img6 from "./../../images/warden6.jpg"
import img7 from "./../../images/warden7.jpg"
import img8 from "./../../images/warden8.png"
import img9 from "./../../images/warden9.jpg"
import {
    Des,
    Sec,
    Slider,
    SubSec,
    Img,
    Sec1,
    ContactInfo,
    H4,
    H1,
    Row,
    P,
    P1,
    Text
} from "./SubWardensStyle";
const SubWardens = () => {
    return ( 
        <Des>
            <Sec>
                <H1>Sub-Wardens</H1>
            </Sec>
            <Sec>
                <Row>
                    <Slider data-aos="zoom-in">
                        <div>
                            <Img src={img1} alt="" />
                        </div>
                        <SubSec>
                            <Sec1>
                                <Text><H4>Mrs. M. H. C. Priyadarshani</H4></Text>
                                <Text><P1>Wellamadama 01 Girls’ Hostel</P1></Text>
                                <ContactInfo><FontAwesomeIcon icon={faUser}/><P>0716721961</P></ContactInfo>
                                <ContactInfo><FontAwesomeIcon icon={faEnvelope}/><P></P></ContactInfo>
                            </Sec1>
                        </SubSec>  
                    </Slider>
                    <Slider data-aos="zoom-in">
                        <div>
                            <Img src={img2} alt="" />
                        </div>
                        
                        <SubSec>
                            <Sec1>
                                <Text><H4>Mrs. Shamini Karunarathne</H4></Text>
                                <Text><P1>Wellamadama 02 Girls’ Hostel</P1></Text>
                                <ContactInfo><FontAwesomeIcon icon={faUser}/><P>0718560738</P></ContactInfo>
                                <ContactInfo><FontAwesomeIcon icon={faEnvelope}/><P></P></ContactInfo>
                            </Sec1>
                        </SubSec>  
                    </Slider>
                    <Slider data-aos="zoom-in">
                        <div>
                            <Img src={img3} alt="" />
                        </div>
                        <SubSec>
                            <Sec1>
                                <Text><H4>Mrs. Chamila Jayalal</H4></Text>
                                <Text><P1> Wellamadama 03 Girls’ Hostel</P1></Text>
                                <ContactInfo><FontAwesomeIcon icon={faUser}/><P>0719364151</P></ContactInfo>
                                <ContactInfo><FontAwesomeIcon icon={faEnvelope}/><P></P></ContactInfo>
                            </Sec1>
                        </SubSec>  
                    </Slider>
                </Row>
                <Row>
                    <Slider data-aos="zoom-in">
                        <div>
                            <Img src={img4} alt="" />
                        </div>
                        <SubSec>
                            <Sec1>
                                <Text><H4>Ms. A. P. Hemanthi</H4></Text>
                                <Text><P1>Eliyakanda New Girls’ Hostel</P1></Text>
                                <ContactInfo><FontAwesomeIcon icon={faUser}/><P>0714469525</P></ContactInfo>
                                <ContactInfo><FontAwesomeIcon icon={faEnvelope}/><P></P></ContactInfo>
                            </Sec1>
                        </SubSec>  
                    </Slider>
                    <Slider data-aos="zoom-in">
                        <div>
                            <Img src={img5} alt="" />
                        </div>
                        
                        <SubSec>
                            <Sec1>
                                <Text><H4>Mrs. P Kumarasingha</H4></Text>
                                <Text><P1>Eliyakanda Old Girls’ Hostel</P1></Text>
                                <ContactInfo><FontAwesomeIcon icon={faUser}/><P>0702519055 / 0705170647</P></ContactInfo>
                                <ContactInfo><FontAwesomeIcon icon={faEnvelope}/><P></P></ContactInfo>
                            </Sec1>
                        </SubSec>  
                    </Slider>
                    <Slider data-aos="zoom-in">
                        <div>
                            <Img src={img6} alt="" />
                        </div>
                        <SubSec>
                            <Sec1>
                                <Text><H4>Mrs. Nirmala Wijerathna</H4></Text>
                                <Text><P1>Pamburana 02 Girls’ Hostel</P1></Text>
                                <ContactInfo><FontAwesomeIcon icon={faUser}/><P>0714994092</P></ContactInfo>
                                <ContactInfo><FontAwesomeIcon icon={faEnvelope}/><P></P></ContactInfo>
                            </Sec1>
                        </SubSec>  
                    </Slider>
                </Row>
                <Row>
                    <Slider data-aos="zoom-in">
                        <div>
                            <Img src={img7} alt="" />
                        </div>
                        <SubSec>
                            <Sec1>
                                <Text><H4>Mr. Srinath Dissanayake</H4></Text>
                                <Text><P1>Eliyakanda New & Old Boys’ Hostel</P1></Text>
                                <ContactInfo><FontAwesomeIcon icon={faUser}/><P>0718153801</P></ContactInfo>
                                <ContactInfo><FontAwesomeIcon icon={faEnvelope}/><P></P></ContactInfo>
                            </Sec1>
                        </SubSec>  
                    </Slider>
                    <Slider data-aos="zoom-in">
                        <div>
                            <Img src={img8} alt="" />
                        </div>
                        
                        <SubSec>
                            <Sec1>
                                <Text><H4>Mr. Chandana Samarawickrama</H4></Text>
                                <Text><P1>Meddawatta Boys’ Hostel</P1></Text>
                                <ContactInfo><FontAwesomeIcon icon={faUser}/><P>0760575698 / 0715549398</P></ContactInfo>
                                <ContactInfo><FontAwesomeIcon icon={faEnvelope}/><P></P></ContactInfo>
                            </Sec1>
                        </SubSec>  
                    </Slider>
                    <Slider data-aos="zoom-in">
                        <div>
                            <Img src={img9} alt="" />
                        </div>
                        <SubSec>
                            <Sec1>
                                <Text><H4>Mr. Kularathna</H4></Text>
                                <Text><P1>Walauwatta Bikkhu Hostel</P1></Text>
                                <ContactInfo><FontAwesomeIcon icon={faUser}/><P>0718336898 / 0710396105</P></ContactInfo>
                                <ContactInfo><FontAwesomeIcon icon={faEnvelope}/><P></P></ContactInfo>
                            </Sec1>
                        </SubSec>  
                    </Slider>
                </Row>
            </Sec>
        </Des>
     );
}
 
export default SubWardens;