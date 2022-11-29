import React, { Component } from "react";
import { Link } from "react-router-dom";
import {createGlobalStyle} from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    background-image: url(${props => props.theme.backgroundImage});
    background-size: cover;
    letter-spacing: 1px;
    color: ${props => props.theme.mainColor};
    margin: 2%;
}
h1, h2, h3, h4{
    color: ${props => props.theme.accentColor};
    text-transform: uppercase;
}
`
const Nav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const DropBtn = styled.div`
    display: inline-block;
    text-align: center;
    text-decoration: none;
    color: #3b0512;
    letter-spacing: 2px;
`
const DropDownContent = styled.div`
    display: none;
    position: absolute;
    background-color: black;
    min-width: 160px;
    border-radius: 10px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
`
const StyledUl = styled.ul`
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
`
const StyledLi = styled.li`
    float: left;
`
const DropDownLi = styled(StyledLi)`
    display: inline-block;
    &:hover ${DropDownContent}{
        display: block;
        border-radius: 10px;
    }
`

const StyledLink = styled.a`
    display: inline-block;
    text-align: center;
    text-decoration: none;
    margin: 0 auto;
    padding: 1em;
    font-size: 1.5em;
    letter-spacing: 2px;
    color: ${props => props.theme.accentColor};
    &:hover {
        color: #dfac7a;
        }
`
const SubLink = styled(StyledLink)`
    
    color: black;
    text-decoration: none;
    display: block;
    text-align:left;
    &:hover {
        background-color: ${props => props.theme.accentColor};
        color: black;
    }
`
const Menu = styled.div`
    display: flex;
    gap: 1em;
    font-size: 18px;
`


class Navbar extends Component {
    render () {
        return (
        <>
        <GlobalStyle />
        <Nav>
            <div><StyledLink href="/">Logo</StyledLink></div>
            <Menu>
            <StyledUl>
                <StyledLi>
                <StyledLink href="/about">Home</StyledLink>
                </StyledLi>
                <DropDownLi>
                <DropBtn onClick={() => this.handleClick("/DropDown")}><StyledLink href="/services">Services</StyledLink>
                </DropBtn>
                <DropDownContent>
                {" "}
                <SubLink href="/services-welding">Welding</SubLink>
                <SubLink href="/services-fabrication">Custom Fabrication</SubLink>
                <SubLink href="/services-metal-panelling">Metal Panelling</SubLink>
                </DropDownContent>
                </DropDownLi>
                <StyledLi>
                <StyledLink href="/previous-work">Previous Work</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink href="/contact">Contact Us</StyledLink>
                </StyledLi>
            </StyledUl>
            </Menu>
        </Nav>
        </>
        )
    }
}

export default Navbar;