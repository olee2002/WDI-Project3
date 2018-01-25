// Importing React
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// import { media } from '../sharedFile.js'

///////////////////////////////////////////////////////////////////////////////////
// CLASS
///////////////////////////////////////////////////////////////////////////////////
class HomePage extends Component {
    render() {
        return (
            <Container>
                <Title>
                    <Logo>
                        <F class="color animated infinite pulse" href="/users">
                            My Architecture
                        </F>
                    </Logo>
                    <br />
                    <br />

                    
                    <div>
                        <C href='/users'> USERS </C>|
                    <B href='/city'> CITIES </B>|
                    <D href='/city/:cityId/arch'> ARCHITECTURE </D>



                    </div>
                </Title>
            </Container>
        );
    }
}

export default HomePage;

///////////////////////////////////////////////////////////////////////////////////
//STYLED-COMPONENTS
///////////////////////////////////////////////////////////////////////////////////

const Title = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 2;
    
`

const Logo = styled.h1`
    margin: 0 auto;
    margin-top: 300px;
    font-size: 8.5vh;
    padding: 20px;
  
`

const F = styled.a`
    text-decoration: none;
    color: white;
    text-shadow:4px 4px 8px #000000;
    z-index: auto;
    &:hover {
        color: #d3d3d3 ;
        text-shadow: none;
        transform:translateY(2px);
    }
`
const Container = styled.div`
    width:100vw;
    height:100vh;
    background: linear-gradient(transparent,transparent,rgb(33,33,33)),rgba(33,33,33,0.01);
`
const B = styled.a`
text-decoration: none;
font-size: 3vh;
color: white;
text-shadow:4px 4px 4px #000000;
z-index: auto;
&:hover{
    color: #A8A8A8;
    transform:translateY(2px);
    font-size: 3vh;
    text-shadow: 0px 0px 0px black;
    z-index: 3;
}
`

const C = styled.a`
text-decoration: none;
font-size: 3vh;
color: white;
text-shadow:4px 4px 4px #000000;
z-index: auto;
&:hover{
    color: #A8A8A8;
    font-size: 3vh;
    transform:translateY(2px);
    text-shadow: 0px 0px 0px black;
    z-index: 3;
}
`

const D = styled.a`
text-decoration: none;
font-size: 3vh;
color: white;
text-shadow:4px 4px 4px #000000;
z-index: auto;
&:hover{
    color: #A8A8A8;
    font-size: 3vh;
    transform:translateY(2px);
    text-shadow: 0px 0px 0px black;
    z-index: 3;
}
`