// Importing React
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


///////////////////////////////////////////////////////////////////////////////////
// CLASS
///////////////////////////////////////////////////////////////////////////////////
class HomePage extends Component {
    render() {
        return (
            <Container className="img">
                <Title>
                    <Logo>
                        <F class="color animated infinite pulse" href="/users">
                            My Architecture
                        </F>
                    </Logo>
                    <br/>
                    <br/>
                 
                    <br/>
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
    margin-top: 200px;
    font-size: 8.5vh;
    padding: 20px
`

const F = styled.a`
    text-decoration: none;
    color: white;
    text-shadow:4px 4px 8px #000000;
    z-index: auto;
    &:hover {
        text-shadow: none;
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
    color: white;
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
    color: white;
    font-size: 3vh;
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
    color: white;
    font-size: 3vh;
    text-shadow: 0px 0px 0px black;
    z-index: 3;
}
`