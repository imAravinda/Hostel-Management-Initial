import styled from "styled-components"
export const Divsec = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
    `
export const Button = styled.button`
        &{
            width: 150px;
            height: 50px;
            color: #424242;
            background-color: #fff;
            font-weight:bold;
            text-decoration: none;
            position: absolute;
            top: 70%;
            z-index:3;
            border: none;
            cursor: pointer;
            border-radius: 50px;
            font-size: 18px;
            font-family: "Nunito", sans-serif;
        } 
        &:active{
            transform: scale(0.95);
        } 
    `