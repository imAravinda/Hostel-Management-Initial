import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import 'react-owl-carousel2/src/owl.theme.default.css';
import img1 from "./../../images/person1.jpeg";
import img2 from "./../../images/person2.jpg";
import img3 from "./../../images/person3.jpg"
import img4 from "./../../images/person2.jpg"
import img5 from "./../../images/person3.jpg"
import img6 from "./../../images/person1.jpeg"
import img7 from "./../../images/person2.jpg"
import styled from 'styled-components';
const SubWardens = () => {
    const options = {
        items: 3,
        rewind: true,
        autoplay: true,
        loop:true,
        nav:false,
    };
    const Des = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        padding: 0 5% ;
    `
    const Sec = styled.div`
        flex-basis: 100%;
        padding: 0 5px;
        width: 100%;
        margin-bottom : 5%;
    `
    const Slider=styled.div`
        height: 600px;
        width: 400px;
        z-index: 2;
        border-radius: 10px;
        position: relative;
        padding: 20px;
        background-color: #E5DFFF;
    `
    const Img = styled.img`
        width: 400px;
        height: 350px;
        border-radius: 25px;
    `
    const H1 = styled.h1`
        text-align: center;
        font-size: 40px;
        color: #339BFF;
        font-variant: small-caps;
        font-weight: bold;
        position: relative;
        left: 0;
        margin-bottom: 40px;
        border-bottom: 3px solid #49483E;
        display: inline;
    `
    const H3 = styled.h3`
        color: #000;
        margin: 10px;
        text-align: left;
    `
    const P = styled.p`
        color: #000;
        text-align: left;
        font-weight: 700;
        margin-left: 10px;
    `
    return ( 
        <Des>
            <Sec>
                <H1>Sub-Wardens</H1>
            </Sec>
            <Sec>
            <OwlCarousel options={options} id="carousel">
                <Slider >
                    <div>
                        <Img src={img1} alt="" />
                    </div>
                    <div >
                        <H3>Miss. _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ </H3>
                        <P>Contact No   :</P>
                        <P>Email        :</P>
                    </div>
                </Slider>
                <Slider >
                    <div>
                        <Img src={img2} alt="" />
                    </div>
                    
                    <div >
                        <H3>Miss. _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</H3>
                        <P>Contact No   :</P>
                        <P>Email        :</P>
                    </div>    
                </Slider>
                <Slider className="slider">
                    <div>
                        <Img src={img3} alt="" />
                    </div>

                    <div>
                        <H3>Mr. _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</H3>
                        <P>Contact No   :</P>
                        <P>Email        :</P>
                    </div>    
                </Slider>
                <Slider className="slider">
                    <div>
                        <Img src={img4} alt="" />
                    </div>
                    <div >
                        <H3>Miss. _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</H3>
                        <P>Contact No   :</P>
                        <P>Email        :</P>
                    </div>
                </Slider>
                <Slider className="slider">
                    <div>
                        <Img src={img5} alt="" />
                    </div>
                    <div>
                        <H3>Mr. _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</H3>
                        <P>Contact No   :</P>
                        <P>Email        :</P>
                    </div>
                </Slider>
                <Slider className="slider">
                    <div>
                        <Img src={img6} alt="" />
                    </div>
                    <div >
                        <H3>Miss. _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</H3>
                        <P>Contact No   :</P>
                        <P>Email        :</P>
                    </div>
                </Slider>
                <Slider className="slider">
                    <div>
                        <Img src={img7} alt="" />
                    </div>
                    <div>
                        <H3>Miss. _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _</H3>
                        <P>Contact No   :</P>
                        <P>Email        :</P>
                    </div>
                </Slider>
            </OwlCarousel>
            </Sec>
            
        </Des>
     );
}
 
export default SubWardens;