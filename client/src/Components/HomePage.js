// Importing React
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import FaFolderOpenO from 'react-icons/lib/fa/folder-open-o'
import FaUser from 'react-icons/lib/fa/user'


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
                        <a className="color animated infinite pulse" href="/users">
                            MY ARCHITECTURE
                        </a>
                    </Logo>
                    

                    <Icons>
                        <a href='/users'> <FaUser /> </a>--
                        <a href='/city'> <FaFolderOpenO /> </a>

                    </Icons>


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
    font-size: 2.5vh;
    z-index: 2;
    
`
const Icons = styled.div`
font-size: 5vh;
color: white;
text-shadow:2px 2px 2px #000000;

`

const Logo = styled.h1`
    margin: 0 auto;
    margin-top: 400px;
    font-size: 5.75vh;
    padding: 20px;
  
`

const ArchTitle = styled.a`
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
    a{
        text-decoration: none;
    color: white;
    text-shadow:4px 4px 8px #000000;
    z-index: auto;
    &:hover {
        color: #7e7e7e;
        text-shadow: none;
        text-shadow:2px 2px 2px #000000;
    }
    }
`
