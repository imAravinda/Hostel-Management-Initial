import styled from "styled-components";
export const NavBar=styled.div`
        margin: 0; 
        padding: 0;
    `
export const Nav=styled.nav`
        width: 300px;
        height: 100vh;
        position: fixed;
        right: 0px;
        top: 0;
        background: #339BFF;
        transition: 0.5s;
        z-index: 2;
        /* width: 200px;
        height: 100vh;
        position: fixed;
        right: -250px;
        top: 0;
        background: #339BFF;
        transition: 0.5s;
        z-index: 2; */
    `
export const Links = styled.div`
        margin: 0px 5px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    `
export const Ul=styled.ul`
        /* list-style-type: none;
        text-align: right;
        width: 250px;
        height: 100vh;
        border-radius: 5px;
        background:#339BFF;
        text-align: center;
        position: fixed;
        right: 0px;
        top: 50px;
        cursor: pointer;
        z-index: 3; */
        position: relative;
        right: 15%;
        margin-top: 40%;
        font-family: "Josefin Sans", sans-serif;
        font-weight: 100;
    `
// export const LinksH1=styled.h1`
//         margin-left:100px;
//         color:#FFF;
//         text-align:left;
//         letter-spacing:2px;
//         z-index: 2;
//     `
export const Li=styled.li`
    &{
        list-style: none;
        margin: 40px 10px;
        text-align: right;
    }
    &:hover .Ho{
        width: 100%;
    }
    `
export const Logo = styled.img`
        width: 60px;
        height: 80px;
        position: absolute;
        top: 5%;
        margin-left:15px;
        z-index: 2;
        
    `
export const Span = styled.span`
        width: 0%;
        height: 2px;
        top: 100%;
        margin-top: 10px;
        display: flex;
        justify-content: center;
        background: #FFF;
        z-index: -1;
        transition: 0.5s;
    `
export const Menu = styled.img`
        width: 20px;
        margin-top: 15px;
    `
export const Menubtn = styled.div`
        width: 50px;
        height: 50px;
        border-radius: 5px;
        background:#339BFF;
        text-align: center;
        position: fixed;
        right: 30px;
        top: 5%;
        cursor: pointer;
        z-index: 3;
    `
    