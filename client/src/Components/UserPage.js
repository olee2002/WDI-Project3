// Importing React
import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

//Importing components
import UserAddForm from './UserAddForm'

///////////////////////////////////////////////////////////////////////////////////
// CLASS
///////////////////////////////////////////////////////////////////////////////////
class UserPage extends Component {

    state = {
        users: [],
        newUser: {},
        redirect: false,
        newUserId: ''
    }

    //Using axios to get all the users
    async componentWillMount() {
        const res = await axios.get('/api/users')
        console.log('USERS:' + res.data)
        this.setState({ users: res.data })
    }
    //create users
    handleSubmit = async (e) => {
        e.preventDefault()
        const payload = {
            userName: this.state.newUser.userName,
            photoUrl: this.state.newUser.photoUrl
        }
        const blankForm = {
            userName: '',
            photoUrl: '',
        }
        const res = await axios.post('/api/users', payload)
        this.setState({ redirect: true, newUser: blankForm, newUserId: res.data._id })
    }

    handleChange = (e) => {
        const newUser = { ...this.state.newUser }
        newUser[e.target.name] = e.target.value
        this.setState({ newUser })
    }

    ///////////////////////////////////////////////////////////////////////////////////
    //RENDER
    ///////////////////////////////////////////////////////////////////////////////////

    render() {
        return (
            <Body>
                <Container>
                    <div>
                        <a href='/'> HOME </a>|
                    <a href='/city'> CITIES </a>|
                    <a href='/city/:cityId/arch'> ARCHITECTURE </a>
                    </div>
                    <div>
                        <SignUpContainer>
                            <UserAddForm
                                users={this.state.users}
                                user={this.state.newUser}
                                id={this.state.newUserId}
                                redirect={this.state.redirect}
                                handleChange={this.handleChange}
                                handleSubmit={this.handleSubmit}
                                updateUser={this.updateUser}
                                deleteUser={this.deleteUser}
                            />
                        </SignUpContainer>
                        <Header>Select A User</Header>
                        {this.state.users.map((user, i) => {
                            return (
                                <Names key={i}>
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

export default UserPage;

///////////////////////////////////////////////////////////////////////////////////
//STYLED-COMPONENTS
///////////////////////////////////////////////////////////////////////////////////

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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 100px;
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
`