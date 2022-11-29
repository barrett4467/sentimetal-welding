import React from "react";
import Navbar from "../elements/Navbar";
import styled from "styled-components";


const Header = styled.h1`
    margin: 0 auto;
    font-size: 6em;
    letter-spacing: 0.5rem;
    text-transform: uppercase;
`
const H3 = styled.h3`
    font-size: 2em;
`
const P = styled.p`
    font-size: 1.5em;
`
const A = styled.a`
    text-decoration: none;
    color: ${props => props.theme.mainColor};
    &:hover {
        color: ${props => props.theme.accentColor};
    }

`
const Home = () => {
    return (
        <>
            <Navbar />
            <Header>Sentimetal LLC</Header>
            <H3>Welding & Custom Fabrication</H3>
            <P>Sentimetal LLC is a small welding and fabrication company located in northern Colorado. We specialize in railing, staircases, structural welding, metal wall coverings and custom patina pieces. <A href="/contact">Contact us </A> today for a quote on your next project!</P>
        </>
    )
}

export default Home;