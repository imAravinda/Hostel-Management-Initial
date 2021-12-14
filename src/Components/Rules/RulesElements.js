import styled from "styled-components";
import { StructureContainer as Struct } from "react-router-dom";



export const StructureItems = styled.div`
  width: 1400px;
  height: 500px;
  color: #000;
  flex: 0 1 50%;
  margin-left:60px;
  background:#E5DFFF;
  padding-top:3px;
  margin-bottom:30px;
`;
export const StructureRule = styled.div`
    left:0;
    text-align:left;
    margin-bottom:20px;
    color:#339BFF;
    font-size:40px;
    border-bottom:3px #339BFF solid;
    
`;
export const StructureDes = styled.div`
  color: #000;
  background:none;
  width: 75%;
  height: auto;
  color: #000;
  font-size: 30px;
  font-weight: 600;
  margin-left:30px;
  margin-top: 70px;
 
`;
export const StructureDesPara = styled.div`
  color: #000;
  background:none;
  text-align:left;
  height: auto;
  color: #000;
  font-size: 15px;
  font-weight: 400;
  margin-top: 10px;
  font-style: italic;
  margin-bottom: 20px;
  line-height: 25px;
`;
export const StructureDesVision = styled.div`
  color: #000;
  justify-content: center;
  background:none;
  width: 50%;
  height: auto;
  color: #000;
  font-size: 20px;
  font-weight: 600;
  font-style: italic;
`;
export const StructureDesVisionDes = styled.div`
  color: #000;
  background:none;
  width: 90%;
  height: auto;
  color: #000;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 20px;
  font-style: italic;
  text-align:left;
`;
export const StructureDesMission = styled.div`
  color: #000;
  justify-content: center;
  background:none;
  width: 50%;
  height: auto;
  color: #000;
  font-size: 20px;
  font-weight: 600;
  font-style: italic;
  
`;
export const StructureDesMissionDes = styled.div`
  color: #000;
  justify-content: center;
  background:none;
  width: 90%;
  height: auto;
  color: #000;
  font-size: 15px;
  font-weight: 600;
  text-align:left;
`;
export const StructureImgContainer = styled.div`
  color: #bbb;
  font-size: 14px;
  padding-top: 10px;
  font-weight: 600;
  margin-left:180px;

  button{
    width: 250px;
    height: 40px;
    border: 1px #339BFF solid;
    background: transparent;
    border-radius: 50px;
    color: #339BFF;
    font-size: 20px;
    letter-spacing: 5px;
    margin-top:50px;
    margin-left:100px;
  }
  button:hover{
      background: #339BFF;
      color:#fff;
      transition: all 0.8s;
  }
  
`;
export const StructureImg = styled.img`
  width: auto;
  height: 370px;
  background: none;
  align-items: center;
  border: 6px #da9100 solid;
  opacity: 0.9;
  margin-top: 80px;
  margin-left: 20px;
`;
