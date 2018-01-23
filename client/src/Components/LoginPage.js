import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import LoginSignUp from './LoginSignUp'
import styled from 'styled-components'

const Body = styled.div`
    height: 100%;
    width: 100%;
    position: absolute; 
    top: 0;
    left: 0;
    background-color: #212121;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 100px;
`;

const NavBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

const Header = styled.h1`
    color: white;
    font-size: 6vh;
    text-shadow: 3px 3px 0px black;
    /* border-bottom: thin solid white; */
`;

const A = styled.a`
    text-decoration: none;
    text-shadow: 3px 3px 0px black;
    color: white;
    font-size: 3.5vh;
    &:hover{
        color: white;
        font-size: 3.5vh;
        transform:translateY(2px);
        text-shadow: 0px 0px 0px black;
        z-index: 3;
    }
`;

const Names = styled.div`
    display: flex;
    justify-content: center
`;

const SignUpContainer = styled.div`
margin-top:50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border:1px solid white;
    box-shadow: 3px 3px 0px black;
    background-color: rgba(255,255,255,0.1);
    border-radius: 150px;
    width:  300px;
    height: 300px;
`;



class LoginPage extends Component {

    state = {
        users: []
    }

    // Call the getAllUsers method as soon as the component is created
    componentWillMount() {
        this.getAllUsers()
    }

    //Using axios to get all the users
    getAllUsers = async () => {
        try {
            const res = await axios.get('/api/users')
            console.log('test try'+res.data)
            this.setState({ users: res.data })
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <Body>
                <NavBar>
                    <div
                        href="/"
                        label="Home"
                        primary={true}/>
                </NavBar>

                <Container>
                    <div>

                    <SignUpContainer>
                        <LoginSignUp/>
                    </SignUpContainer>
                        <Header>Select A User</Header>

                        {this.state.users.map(user => {
                            return (
                                <Names key={user._id}>
                                    <A href={`/users/${user._id}`}>{user.userName} </A>
                                </Names>
                            )
                        })}
                 
                    
                    </div>
                </Container>
            </Body>
        );
    }
}

export default LoginPage;