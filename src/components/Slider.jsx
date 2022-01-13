import React, { useState } from "react";
import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {sliderItems} from "../data";
const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  position: relative;
  overflow: hidden;
  background-color: whitesmoke;

`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props=>props.slideIndex*-100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
 
  background-color: #${props => props.bg};
`;
const ImgContainer = styled.div`
  height:100%;
  text-align: end;
  flex: 1;
`;
const Image = styled.img`
  height:80%;
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  color:#4cb7c5;
  cursor: pointer;
  border-radius: 20px;
`;
const Slider = () => {
  const [slideIndex, setSlideIndex] =useState(0)
  const handleClick= (direction) =>{
    if(direction === "left"){
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    }else{
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
  }
  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ArrowBackIosIcon />
      </Arrow>
      <Wrapper slideIndex = {slideIndex}>
        {
           sliderItems.map((slide) =>(
            <Slide bg={slide.bg} key={slide.id}>
        <ImgContainer>
          <Image src={slide.img}/>
        </ImgContainer>
        <InfoContainer>
          <Title>{slide.title}</Title>
          <Desc>{slide.desc}</Desc>
          <Button>SHOW NOW</Button>
        </InfoContainer>
        </Slide>
          ))
        }
      

      </Wrapper>
      <Arrow direction="right"  onClick={()=>handleClick("right")}>
        <ArrowForwardIosIcon />
      </Arrow>
    </Container>
    // https://image.freepik.com/free-photo/confused-young-man-casual-clothes-shrugging-dont-know-anything-looking-clueless-standing-against-blue-wall_1258-43285.jpg
  );
};

export default Slider;
