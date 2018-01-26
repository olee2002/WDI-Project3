
// Importing React
import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'

//Importing components
import UserEditForm from './UserEditForm'

///////////////////////////////////////////////////////////////////////////////////
// CLASS
///////////////////////////////////////////////////////////////////////////////////
class UserProfile extends Component {

    state = {
        user: {},
        redirect: false
    }
    componentWillMount() {
        this.getUserInfo()
    }

    getUserInfo = async () => {
        try {
            const { userId } = this.props.match.params

            const res = await axios.get(`/api/users/${userId}`)
            this.setState({ user: res.data })
        } catch (err) {
            console.log(err)
        }
    }
    deleteUser = async () => {

        const userId = this.props.match.params.userId
        const res = await axios.delete(`/api/users/${userId}`)
        console.log(res.data)
        this.setState({ user: res.data, redirect: true })
    }

    handleChange = (event) => {
        // console.log(event)
        const attribute = event.target.name
        const clonedUser = { ...this.state.user }
        clonedUser[attribute] = event.target.value
        this.setState({ user: clonedUser })
    }

    // custom method to have user's updated info sent back to the database. 
    showUser = async () => {
        const userId = this.props.match.params.userId
        const res = await axios.get(`/api/users/${userId}`)
        this.setState({ user: res.data })
        console.log(res.data)
    }
    handleSubmit = async (e) => {

        e.preventDefault()

        const userId = this.props.match.params.userId
        const payload = {
            userName: this.state.user.userName
        }
        const blankForm = {
            userName: ''
        }
        const res = await axios.patch(`/api/users/${userId}`, payload)
        await this.showUser()
        this.setState({ user: res.data })
    }

    ///////////////////////////////////////////////////////////////////////////////////
    //RENDER
    ///////////////////////////////////////////////////////////////////////////////////
    render() {
        const { user } = this.state
        if (this.state.redirect) {
            return (<Redirect to={`/users`} />)
        }
        return (
            <Profile>
                <div>
                    <a href='/'> HOME </a>|
                    <a href='/users'> USERS </a>|
                    <a href='/city'> CITIES </a>
                </div>

                <br />
                <div>
                    <h1>{user.userName}'s Profile</h1>
                </div>
                <div>
                    <img src={user.photoUrl} alt="Profile Pic" />
                </div>
                <div>
                    <h3>User Name: {user.userName}</h3>
                    <button onClick={this.deleteUser}> Delete</button>
                    
                    <UserEditForm
                        user={this.state.user}
                        id={this.state.user._id}
                        showUser={this.showUser}
                        handleChange = {this.handleChange} 
                        handleSubmit = {this.handleSubmit}
                    />
                   
                </div>
            </Profile>
        )
    }
}

export default UserProfile;

///////////////////////////////////////////////////////////////////////////////////
//STYLED-COMPONENTS
///////////////////////////////////////////////////////////////////////////////////

const Profile = styled.div`
    width: 100vw;
    height:100vh;
    display:flex;
    flex-direction: column;
    align-items: center;
    color: white;
    background-color: #212121;
    margin: 0 auto;
    /* margin-top: 200px; */
    font-size: 2.5vh;
    padding: 20px;
    text-decoration: none;
    
`