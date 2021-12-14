import styled from "styled-components";
import {GallaryContainer as Gallary} from 'react-router-dom';


export const GallaryContainer =styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 5% ;
    
`

export const GallaryHeader =styled.div`
    font-size: 40px;
    text-align:left;
    margin-left:150px;
    margin-right:150px;
    font-weight: 600;
    font-style: italic;
    color: #339BFF;
    margin-bottom: 30px;
    border-bottom:3px #339BFF solid;
`
export const GallaryRows =styled.div`
   display:flex;
   flex-wrap:wrap;
   justify-content:center;
   background:#E5DFFF;
   margin:0 55px;
   padding: 5% 0;
   border-radius:10px;
   box-shadow: 0px 10px 20px 2px #00002D;
`
export const GallaryFirstRow =styled.div`
    display: flex;
    align-items: center;
    margin-bottom:10px;
`
export const GallatyImgContainer =styled.div`
    width: 33%;
`
export const GallaryImg =styled.img`
    width: 350px;
    height: 350px;
    //padding: 10px;
    margin: 10px 40px;
    border-radius:40px;

`
