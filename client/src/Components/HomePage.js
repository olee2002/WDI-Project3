import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import styled from 'styled-components'



const Title = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: flex-start;
    z-index: 2;
    
`

const Logo = styled.h1`
    margin: 0 auto;
    margin-top: 300px;
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




class HomePage extends Component {
    render() {
        return (
            <Container className="img">
                <Title>
                    <Logo><A class="color animated infinite pulse" href="/users">My Architecture</A></Logo>

                </Title>
            </Container>
        );
    }
}

export default HomePage;