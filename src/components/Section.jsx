import React from 'react'
import styled from 'styled-components'

function Section({title, description, backgroundImg , leftBtnText, rightBtnText}) {
   // console.log(props)
  return (
   <Wrap bgImage = {backgroundImg} >
   <ItemText>
    <h1> {title} </h1>
    <p> {description} </p>
   </ItemText>
   <Buttons>
   <ButtonGroup>
       <LeftButton>
       {leftBtnText}
         </LeftButton>
{
    rightBtnText && 
    <RightButton>
   {rightBtnText}
    </RightButton>
}

   </ButtonGroup>
   
   <DownArrow src= '/images/down-arrow.svg' />
   </Buttons>
  
   </Wrap>
  )
}

export default Section

const Wrap = styled.div `
    z-index: 10;
    width : 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat :  no-repeat;
    background-image: ${props => `url('/images/${props.bgImage}')`};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:center;


`
const ItemText = styled.div `
padding-top : 15vh;
text-align : center;

`
const ButtonGroup = styled.div `
display: flex;
margin-bottom: 30px;
@media (max-width: 768px) {
flex-direction:column;
gap: 6px;
}


`
const LeftButton = styled.div `
    background-color : rgba(23, 26, 32, 0.8);
    height : 40px;
    width : 254px;
    color: white;
    display: flex;
    justify-content:center;
    align-items: center;
    border-radius:100px;
    opacity: 0.85;
    text-transform : uppercase;
    font-size: 12px;
    cursor: pointer;


`
 const RightButton = styled(LeftButton) `
    background:white;
    opacity: 0.65;
    color: black;
 `
 const DownArrow = styled.img `
 
 height: 40px;
 overflow-x:hidden;
 animation: animateDown infinite 1.5s;


 `
 const Buttons = styled.div`
    display: flex;
    flex-direction: column;
 `

