import styled from "styled-components";



export const Container = styled.div`
  display: block;
  background:linear-gradient(#ffffff,#339BFF);
  height:100%;
  /* position: relative;
  top: -300px; */
  z-index: -5;
  padding: 5%;
`;
export const Header = styled.h1`
    text-align: center;
    font-size: 40px;
    color: #fff;
    letter-spacing:8px;
    font-weight: bold;
    display: inline;
    font-family: "Josefin Sans", sans-serif;
    font-weight: 100;
`;
export const RulesSection = styled.div`
  width: 80%;
  height: auto;
  font-size: 30px;
  font-weight: 600;
  padding-top: 3%;
  position: relative;
  left: 10%;
  /* color:#484747;
  font-family: "Nunito", sans-serif;
  opacity: 0.5; */
`;
export const RulesDescription = styled.div`
  background:none;
  text-align:left;
  height: auto;
  font-size: 15px;
  font-weight: bold;
  line-height: 25px;
  margin: 0 20px ;
  font-style: italic;
  font-family: "Josefin Sans", sans-serif;
  color: #ffffffdd;
`;
export const Rule = styled.div`
  background:none;
  width: 90%;
  height: auto;
  font-size: 15px;
  font-weight: 100;
  margin-bottom: 20px;
  text-align:left;
  margin: 20px;
  font-family: "Nunito", sans-serif;
  color: #fff;
  opacity: 0.8;
`;
// export const Divsec = styled.div`
//         display: flex;
//         justify-content: center;
//         align-items: center;
//     `
export const Button = styled.button`
        &{
            width: 150px;
            height: 50px;
            cursor: pointer;
            background-color: #fff;
            font-weight:bold;
            text-decoration: none;
            z-index:1;
            border: none;
            border-radius: 50px;
            position: relative;
            font-size: 18px;
            top: 80%;
            font-family: "Nunito", sans-serif;
        } 
        & .lin{
          text-decoration: none;
          color: #49483E;
        }
        &:active{
            transform: scale(0.95);
        } 
    `