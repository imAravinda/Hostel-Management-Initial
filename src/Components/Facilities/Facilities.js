import styled from "styled-components";
import CountUp from 'react-countup';
import { useState,useEffect } from "react";
const Facilities = () => {
    const Div = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        height: 600px;
        margin-top: 35%;
        padding-top: 12%;
        padding-bottom: 10%;
        border-bottom-right-radius: 30%;
        background-color: #fff;
    `
    const H1 = styled.h1`
        text-align: center;
        font-size: 40px;
        color: #49483E;
        letter-spacing:8px;
        font-weight: bold;
        position: relative;
        left: 0;
        display: inline;
        font-family: "Josefin Sans", sans-serif;
        font-weight: 100;
    `
    const MainSubSec = styled.div`
        display: flex;
        justify-content: space-around;
        align-items: center;
    `
    const Sec = styled.div`
        flex-basis: 100%;
        margin:10px;
        width: 100%;
    `
    const SubSec = styled.div`
        margin: 15px;
    `
    
    const H2 = styled.h2`
        margin: 0px 10px 20px 10px;
        font-size:50px;
        font-weight:400;
    `
    const P = styled.p`
        font-size: 30px;
        text-align: center;
        letter-spacing:6px;
        color:#484747;
        font-family: "Nunito", sans-serif;
        opacity: 0.5;
    `
    const P1 = styled.p`
        font-size: 17px;
        text-align: center;
        width: 80%;
        position: relative;
        left:10%;
        font-family: "Nunito", sans-serif;
        opacity: 0.5;
    `
    const HR1 = styled.hr`
        width:80%;
        height:3px;
        background: #49483E;
        position:relative;
        //margin-left:44%
        top: -5%;
    `
    const Count = styled.div`
        font-family:  "Nunito", sans-serif;
        color: #49483E;
    `
    const[ScrollToTop,setScrollToTop] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.pageYOffset >= 400){
                setScrollToTop(true);
            }
            else{
                setScrollToTop(false)
            }
        })
    }, []);
    return ( 
        <Div>
            <Sec>
                <H1>Hostel Facilities</H1>
            </Sec>
            <Sec>
                <P1>The University hostels provide enormous facilities aiming at creating a good learning environment for residential students. Internal hostels are equipped with high standard bed rooms, meeting area, common area, playing area (carom) and canteen. For each room (depending on number of students), two studying tables/chairs and towel racks are provided.  In addition, good number of dustbins are placed for proper waste disposal. </P1>
            </Sec>
            <Sec>
                <MainSubSec>
                <SubSec>
                    <H2>{ScrollToTop && <Count><CountUp end={10} duration={1}/></Count> }</H2>
                    <P>Faculties</P>
                </SubSec>
                <SubSec>
                    <H2>{ScrollToTop && <Count><CountUp end={6547} duration={1}/> </Count>}</H2>
                    <P>Students</P>
                </SubSec>
                <SubSec>
                    <H2>{ScrollToTop && <Count><CountUp end={15} duration={1}/></Count> }</H2>
                    <P>Sub-Wordens</P>
                </SubSec>
                </MainSubSec>
            </Sec>
            <HR1 /> 
        </Div>
     );
}
 
export default Facilities;