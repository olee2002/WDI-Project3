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
                        <Users>
                        {this.state.users.map((user, i) => {
                            return (
                                <Names key={i}>
                                    <A href={`/users/${user._id}`}><UserBox>{user.userName}</UserBox> </A>
                                </Names>
                            )
                        })}
                        </Users>
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
    /* background-color: #212121; */
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 80px;
    a{
        text-decoration: none;
        color:black;
        &:hover{
        color: #696969;
        transform:translateY(2px);
        text-shadow: 0px 0px 0px #bdbdbd;
        z-index: 3;
    }
    }
`;


const Header = styled.h1`
    color: black;
    font-size: 6vh;
    text-shadow: 4px 4px 0px #7e7e7e;
    /* border-bottom: thin solid white; */
`;

const A = styled.a`
    text-decoration: none;
    text-shadow: 3px 3px 0px #bdbdbd;
    color: black;
    font-size: 4vh;
    &:hover{
        color: #696969;
        font-size: 3.5vh;
        transform:translateY(2px);
        text-shadow: 0px 0px 0px #bdbdbd;
        z-index: 3;
    }
`;

const Names = styled.div`
    display: flex;
    justify-content: center
`;

const SignUpContainer = styled.div`
    
    margin: 0 auto;
    margin-top:20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    background-color:#212121;
    border:2px solid white;
    box-shadow: 3px 3px 0px black;
    background-color: rgba(255,255,255,0.75);
    border-radius: 50px;
    width:  250px;
    height: 300px;
    
`

const Users = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* flex-wrap:wrap; */
   `
    const UserBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* flex-wrap:wrap; */
    margin:5px;
    padding:5px;
    border:1.5px solid white;
    width: 15vh;
    height:15vh;
    border-radius: 10vh;
    color: black;
    background: #a8a8a8;
    font-size: 4vh;
    box-shadow: 3px 3px 0px #7e7e7e;
    &:hover{
        color: #696969;
        transform:translateY(2px);
        box-shadow: 1.5px 1.5px 0px #7e7e7e;
        z-index: 3;
    }
`;