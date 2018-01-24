import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'



class HomePage extends Component {
    render() {
        return (
            <Container className="img">
                <Title>
                    <Logo>
                        <A class="color animated infinite pulse" href="/users">
                            My Architecture
                        </A>
                    </Logo>
                    <br/>
                    <br/>
                    <br/>
                    <Links>
                    <Link to='/city'> CITIES </Link>|

                    <Link to='/users'> USERS </Link>|
                    
                    <Link to='/users'> LOGIN </Link>
                    </Links>
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
    margin-top: 250px;
    font-size: 8.5vh;
    padding: 20px
`

const A = styled.a`
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
    background: #212121;
`
const Links = styled.a`
text-decoration: none;
font-size: 3.5vh;
color: white;
text-shadow:4px 4px 8px #000000;
z-index: auto;

`