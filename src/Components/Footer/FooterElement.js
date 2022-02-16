import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  color: #fff;
  background:#339BFF;;
`;
export const FooterSection = styled.div`
  margin: 0 2%;
`;
export const SubSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-bottom: 5%;
`
export const Logo = styled.div`
    margin: 5% 5% 0 5%;
`;
export const Name = styled.div`
    line-height: 40px;
    letter-spacing: 5px;
    padding-bottom: 8%;
`;
export const FooterRightColumn = styled.div`
    flex-basis: 50%;
    width: 45%;
    float: right;
`;
export const FooterLeftColumn = styled.div`
    flex-basis: 50%;
    width: 45%;
    float: left;
`;
export const HR = styled.hr`
    height: 1px;
    background-color: #fff;
    border: none;
`;
export const Links = styled.div`
  display: flex;
  justify-content: center;
`;
export const Link1 = styled.div`
    &{  margin: 2px 5%;
        font-size: 20px;
        cursor: pointer;
        font-family: "Nunito", sans-serif;
    }
    &:hover .Ho{
        width: 50%;
    }
`;
export const Text = styled.div`
  text-align: justify;
  font-family: "Nunito", sans-serif;
  line-height: 25px;
`;
export const Image = styled.img`
    width: 80px;
    height: 100px;
`;
export const H1 = styled.h1`
    font-weight: 100;
    font-family: "Josefin Sans", sans-serif;
`;
export const Span = styled.span`
        width: 0%;
        height: 1.5px;
        top: 80%;
        margin-top: 5px;
        display: flex;
        justify-content: center;
        background: #FFF;
        z-index: -1;
        transition: 0.5s;
    `

