import React from "react";

import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import breakpoints from "../elements/breakpoints";

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #faf9f6;
        text-align: center;
    }

`
const ImageContainer = styled.div`
    margin: 0 auto;
`
const PhotoCards = styled.div`
    @media only screen and ${breakpoints.device.xs}{
        width: 100%;
    }
    @media only screen and ${breakpoints.device.sm}{
        width: 48%;
        border-radius: 10px;
        float: left;
        margin: 0 auto;
        padding: 1%;  
    }
    @media only screen and ${breakpoints.device.xl}{
        with: 32%;
    }
`
const Photo = styled.img`
    width: 100%;
    border-radius: 10px;
    
`

function Photos () {
    return (
        <div>
            <GlobalStyle />
            <ImageContainer>
                <PhotoCards>
                    <Photo src={"http://placekitten.com/200/300"}/>
                </PhotoCards>
                <PhotoCards>
                <Photo src={"http://placekitten.com/200/300"}/>
                </PhotoCards>
                <PhotoCards>
            <Photo src={"http://placekitten.com/200/300"}/>
                </PhotoCards>
                <PhotoCards>
                <Photo src={"http://placekitten.com/200/300"}/>
                </PhotoCards>
                <PhotoCards>
            <Photo src={"http://placekitten.com/200/300"}/>
                </PhotoCards>
                <PhotoCards>
                <Photo src={"http://placekitten.com/200/300"}/>
                </PhotoCards>
                <PhotoCards>
            <Photo src={"http://placekitten.com/200/300"}/>
                </PhotoCards>
                <PhotoCards>
                <Photo src={"http://placekitten.com/200/300"}/>
                </PhotoCards>
                <PhotoCards>
            <Photo src={"http://placekitten.com/200/300"}/>
                </PhotoCards>
                <PhotoCards>
                    <Photo src={"http://placekitten.com/200/300"}/>
                </PhotoCards>
                <PhotoCards>
                <Photo src={"http://placekitten.com/200/300"}/>
                </PhotoCards>
                <PhotoCards>
                    <Photo src={"http://placekitten.com/200/300"}/>
                </PhotoCards>
                <PhotoCards>
                <Photo src={"http://placekitten.com/200/300"}/>
                </PhotoCards>
                <PhotoCards>
                    <Photo src={"http://placekitten.com/200/300"}/>
                </PhotoCards>
                <PhotoCards>
                <Photo src={"http://placekitten.com/200/300"}/>
                </PhotoCards>
                <PhotoCards>
                    <Photo src={"http://placekitten.com/200/300"}/>
                </PhotoCards>
                <PhotoCards>
                <Photo src={"http://placekitten.com/200/300"}/>
                </PhotoCards>
                <PhotoCards>
                    <Photo src={"http://placekitten.com/200/300"}/>
                </PhotoCards>
                <PhotoCards>
                <Photo src={"http://placekitten.com/200/300"}/>
                </PhotoCards>
                <PhotoCards>
                    <Photo src={"http://placekitten.com/200/300"}/>
                </PhotoCards>
            </ImageContainer>
        </div>
    )
}

export default Photos; 