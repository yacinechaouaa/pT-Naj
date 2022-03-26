import React from "react";

import styled, { css, keyframes } from "styled-components";

const shake = keyframes`
 10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`

const FlashAnimationLeft = keyframes`
from {
  transform: translate(-8px, 0px);
}

to {
  transform: translate(12px, 0px);
}
`;
const FlashAnimationRight = keyframes`
from {
  transform: translate(12px, 0px);
}

to {
  transform: translate(-8px, 0px);
}
`;
const FlashAnimation = keyframes`
from{
opacity:0;
}

to{
opacity:1;
}
`;

export const CardWrapper = styled.div`
  background-color: white;
  position: relative;
  border-radius: 10px;
  width: 400px;
  overflow: hidden;
  display: grid;
  grid-template-columns: auto auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  &&:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    transform: translate(0px, -10px);
  }
  @media screen and (max-width: 768px) {
    width: 330px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  padding: 15px;
  position: relative;
  width: 150px;
  flex-direction: column;
  animation: ${FlashAnimation} 1.2s linear;
`;
export const CardAnimationWrapper = styled.div`
  animation: ${FlashAnimation} 1.2s linear;
`;

export const CardTextTitle = styled.span`
  border-bottom: 5px solid #4070F4;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  box-sizing: border-box;
  margin-top: 8px;
  margin-bottom: 8px;
  padding-bottom: 4px;
`;

export const CardTextParag = styled.p`
  font-size: 14px;
  margin-top: 8px;
  width: 100%;
  margin-bottom: 8px;
  font-weight: 600;
  padding-bottom: 4px;
`;

export const Square = styled.div`
position : relative;
bottom : ${props => (props.position ? "20px" : "")};
right : ${props => (props.position ? "-75px" : "")};
left:${props => (props.position ? "" : "-28px")};
top:${props => (props.position ? "" : "-20px")};
color:white;
float:left;
margin : 20px;
padding : 5px;
	height: 30px;
	transform: skew(20deg);
	background: #4070F4;
}
`;

export const NextArrow = styled.div`

  ${props => (props.direction === "right" ? RightArrow : LeftArrow)}
  
    animation: ${props =>
      props.direction === "right"
        ? FlashAnimationRight
        : FlashAnimationLeft} 1.2s linear infinite;
    cursor:pointer;
 
`;

export const Row = styled.div`
  display: flex;
  position: relative;
`;
export const Column = styled.div`
  display: flex;
  position: relative;
  flex-direction:column;
  @media screen and (max-width: 768px) {
    flex-direction:row;
  }
`;
export const IconLink = styled.img`
width:30px;
cursor: pointer;
margin-top:20px;

  margin-left:50%;
 margin-bottom:10%;
 margin-top:-20%;

`
export const RowModi = styled.div`
  display: flex;
  position: relative;
  padding: 10px;
  padding-bottom : 50px;
  @media screen and (max-width: 768px) {
    padding: 10px;
    padding-bottom:50px;
    flex-direction:column-reverse;
  }
`;
const RightArrow = css`
  width: 0;
  height: 0;
  position: relative;
  left: 0px;
  border-radius: 5px;
  border-top: 10px solid transparent;
  border-right: 12px solid #4070F4;
  border-bottom: 10px solid transparent;
`;
const LeftArrow = css`
  width: 0;
  height: 0;
  position: relative;
  bottom: -8px;
  border-radius: 5px;
  border-top: 10px solid transparent;
  border-left: 12px solid #4070F4;
  border-bottom: 10px solid transparent;
`;

export const Circle = styled.div`
position: relative;
border: 0px solid #4070F4;
width: 40px;
height: 40px;
border-radius: 100%;
overflow : hidden;
right: ${props => (props.direction ? "" : "-60px")}
left : 0px
`;

export const Rectangle = styled.div`
  height: 50px;
  width: 100%;
  position: absolute;
  display: flex;
  bottom: 0;
  background-color: #4070F4;
 
`;

export const Image = styled.img`
  width: 300px;
`;

export const LittleCard = styled.div`
  background-color: #1b595e;
  color: white;
  border-radius: 10px;
  padding: 5px;
  margin: 10px;
  animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both ;
  transform: translate3d(0, 0, 0);
`;
