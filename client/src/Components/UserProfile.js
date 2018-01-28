
// Importing React
import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import FaTrash from 'react-icons/lib/fa/trash'
import Overdrive from 'react-overdrive'

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

    handleSubmit = async (e) => {

        e.preventDefault()

        const userId = this.props.match.params.userId
        const payload = {
            userName: this.state.user.userName
        }
        const res = await axios.patch(`/api/users/${userId}`, payload)
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
                    <Overdrive id={user._id}>
                        <img src={user.photoUrl} alt="Profile Pic" />
                    </Overdrive>
                </div>

                <h3>User Name: {user.userName}</h3>
                <h1 onClick={this.deleteUser}>
                    <FaTrash />
                </h1>

                <UserEditForm
                    user={this.state.user}
                    id={this.state.user._id}
                    // showUser={this.showUser}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />


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
    color: black;
    /* background-color: #212121; */
    margin: 0 auto;
    /* margin-top: 200px; */
    font-size: 2vh;
    color: white;
    padding: 20px;
    text-decoration: none;
    
        img {
            width: 30vh;
            height: 30vh;
            border-radius:15px;
            object-fit: cover;
            border:1px solid white;
            box-shadow: 3px 3px 0px #3f3f3f;
}
   
    a{ 
  text-decoration: none;
  color:white;
  
};
  h1{
      font-size: 3vh;
      color:white;
  text-shadow: 2px 2px 0px #545454;}
  button{
      margin: 0 auto;
      width: 20vh;
      height: 5vh;
      border: 1px solid #bdbdbd;
      border-radius:5px;
      font-family: 'Montserrat', sans-serif;
      box-shadow: 1.5px 1.5px 0px #3f3f3f;}
`