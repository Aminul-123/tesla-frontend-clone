import React, { useState } from 'react'
import styled from 'styled-components'
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
  return (
   <>
   <Container>
            <a>
                <img src="/images/logo.svg" alt="" />
            </a>
            <Menu>
                <p>
                    <a href="#">Model S</a>
                    <a href="#">Model X</a>
                    <a href="#">Model 3</a>
                    <a href="#">Model Y</a>


                </p>
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla account</a>
                <CustomMenu onClick={() => setBurgerStatus(true)}/>
            </RightMenu>
            <BurgerNav show ={burgerStatus} >
                <CloseWrapper>
                   <CustomClose onClick={() => setBurgerStatus(false)}  />
                </CloseWrapper>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadaster</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
              
              
            </BurgerNav>
   </Container>
   </>
  )
}

export default Header

const Container = styled.div`
    z-index: 1;
    min-height: 60px;
    position: fixed;
    display : flex;
    align-items: center;
    justify-content: space-between;
    
    padding: 0 20px 0 20px;
    top : 0;
    left : 0;
    right: 0;
    
`
const Menu = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
    flex: 1;
   

    p {
    font-weight: 500;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
    display: flex;
    gap: 10px
    
    }
    @media (max-width: 768px) {
    display:none;
    }
`
const RightMenu = styled.div`
display: flex;
align-items: center;

    a {
        font-weight : 500;
        text-transform: uppercase;
        margin-right: 3px;
        flex-wrap: nowrap;
        padding-left: 14px;
    }

`
const CustomMenu = styled(IoMenu) `
    cursor:pointer;
    font-size: 23px;

`
const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background:white;
    width: 300px;
    z-index: 100;
    list-style:none;
    padding: 20px;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)' };
    transition: transform 0.2s ease-in;
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);

        a {
            font-weight: 600;
        }

    }
`
const CustomClose = styled( IoMdClose)`
    font-size: 25px;
    cursor:pointer;
`
const CloseWrapper= styled.div`
display: flex;
justify-content:flex-end;

`