import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'
// import UserProfile from './UserProfile'
import LoginSignUp from './LoginSignUp'
import styled from 'styled-components'

///////////////////////////////////////////////////////////////////////////////////
//LOGINPAGE CLASS
///////////////////////////////////////////////////////////////////////////////////
class LoginPage extends Component {

    state = {
        users: [],
        newUser: {
            userName: 'Olee',
            photoUrl: 'http://www.fillmurray.com/300/300',
        },
        redirect: false,
        newUserId: ''
    }

    //Using axios to get all the users
    async componentWillMount() {
        const res = await axios.get('/api/users')
        console.log('USERS:' + res.data)
        this.setState({ users: res.data })
    }
    createUser = async () => {
        console.log(this.state.users)
        const res = await axios.post(`/api/users`)
        const newUser = res.data
        console.log(res.data)
        const newUsers = [...this.state.users]
        newUsers.unshift(newUser)
        this.setState({ redirect: true, users: newUsers, newUserId: res.data._id })
        console.log(this.state.users)
    }

    deleteuser = async (user) => {
        try {
            await axios.delete(`/api/users/${user._id}`)
            const indexToDelete = this.state.users.indexOf(user)
            const newUsers = [...this.state.users]
            newUsers.splice(indexToDelete, 1)
            this.setState({ users: newUsers })
        } catch (error) {
            console.log(error)
        }
    }
    updateUser = async (user) => {
        try {
            await axios.patch(`/api/users/${user._id}`, user)
        } catch (error) {
            console.log(error)
        }
    }

    handleChange = (e) => {
        const newUser = [...this.state.newUser]
        newUser[e.target.name] = e.target.value
        this.setState({ newUser })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        this.createUser()
    }


    ///////////////////////////////////////////////////////////////////////////////////
    //RENDER
    ///////////////////////////////////////////////////////////////////////////////////

    render() {
        return (
            <Body>
                <Container>
                    <div>
                        <SignUpContainer>
                            <LoginSignUp
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
    flex-direction: row;
    justify-content: space-around;
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
export default LoginPage;