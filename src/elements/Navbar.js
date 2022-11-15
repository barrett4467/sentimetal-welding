import React from "react";
import { Link } from "react-router-dom";
import {createGlobalStyle} from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`
const Nav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const DropDownContent = styled.div`
    display: none;
    position: absolute;
    min-width: 160px;
    z-index: 1;
`
const StyledUl = styled.ul`
    display: flex;
    list-style-type: none;
    
`
const StyledLi = styled.li`
    position: relative;
    top: 10px;
    margin: 0 auto;
    &:hover ${DropDownContent} {
        display: block;
    }
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: #3b0512;
    font-size: 1.5em;
    letter-spacing: 2px;
    &:hover {
        color: #dfac7a;
    }
`
const Menu = styled.div`
    display: flex;
    gap: 1em;
    font-size: 18px;
`


function Navbar() {
    return(
        <>
        <GlobalStyle />
        <Nav>
            <div>Logo</div>
            <Menu>
                <StyledUl>
                    <StyledLi>
                        <StyledLink to="/">Home</StyledLink>
                    </StyledLi>
                    <StyledLi>
                        <StyledLink to="/services">Services</StyledLink>
                    </StyledLi>
                    <StyledLi>
                    <StyledLink to="/previous-work">Previous Work</StyledLink>
                    </StyledLi>
                    <StyledLi>
                        <StyledLink to="/contact">Contact Us</StyledLink>
                    </StyledLi>
                </StyledUl>
            </Menu>
        </Nav>
        </>
    )
}

export default Navbar;