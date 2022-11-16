import React, { Component } from "react";
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
    background-color: #f9f9f9;
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
    color: #3b0512;
    font-size: 1.5em;
    letter-spacing: 2px;
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
        background-color: #dfac7a;
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
            <div>Logo</div>
            <Menu>
            <StyledUl>
                <StyledLi>
                <StyledLink href="/">Home</StyledLink>
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