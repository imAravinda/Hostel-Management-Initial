
import { useState,useEffect } from "react";
import styled from "styled-components";
const ScrollToTop = (props) => {

    const Icon = styled.div`
        &{
            position: fixed;
            bottom: 20px;
            right: 20px;
            font-size: 50px;
            cursor: pointer;
            border: none;
            color:#004f9b;
            z-index: 4;
    }
    &:active{
        transform: scale(0.8);
    }
    `

    const[ScrollToTop,setScrollToTop] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.pageYOffset > 200){
                setScrollToTop(true);
            }
            else{
                setScrollToTop(false)
            }
        })
    }, [])
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return ( 
        <div>
            {ScrollToTop && <Icon onClick = {scrollToTop}>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm1 10h3l-4-4-4 4h3v4h2v-4z"></path></g></svg>
                </Icon> }
        </div>
     );
}
 
export default ScrollToTop;