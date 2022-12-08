import React, { Component } from "react";
import { Link } from "react-router-dom";
import {createGlobalStyle} from "styled-components";
import styled from "styled-components";
import breakpoints from "./breakpoints";


const Nav = styled.div`
    @media only screen and ${breakpoints.device.sm}{
        display: flex;
        align-items: center;
        width: 100%;
    }

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

    @media only screen and ${breakpoints.device.xs}{
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
    }
    @media only screen and ${breakpoints.device.lg}{
        font-size: 2em;
    }

`
const SubLink = styled(StyledLink)`
    color: ${props => props.theme.mainColor};
    text-decoration: none;
    display: block;
    text-align:left;
    &:hover {
        background-color: ${props => props.theme.accentColor};
        color: black;
    }
`
const handleOnClick = () =>{
    setTimeout(() => {
        console.log("waiting for 1 sec");
    }, "1000")
}

class Navbar extends Component {
    render () {
        return (
        <>
        <Nav>
            <StyledUl>
            <StyledLink onClick={handleOnClick} href="/">Logo</StyledLink>
                <StyledLi>
                <StyledLink onClick={handleOnClick} href="/about">Home</StyledLink>
                </StyledLi>
                <DropDownLi>
                <DropBtn onClick={() => this.handleClick("/DropDown")}><StyledLink href="/services">Services</StyledLink>
                </DropBtn>
                <DropDownContent>
                {" "}
                <SubLink onClick={handleOnClick} href="/services-welding">Welding</SubLink>
                <SubLink onClick={handleOnClick} href="/services-fabrication">Custom Fabrication</SubLink>
                <SubLink onClick={handleOnClick} href="/services-metal-panelling">Metal Panelling</SubLink>
                </DropDownContent>
                </DropDownLi>
                <StyledLi>
                <StyledLink onClick={handleOnClick}  href="/previous-work">Previous Work</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink onClick={handleOnClick} href="/contact">Contact Us</StyledLink>
                </StyledLi>
            </StyledUl>
        </Nav>
        </>
        )
    }
}

export default Navbar;