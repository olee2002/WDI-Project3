
// Importing React
import React, { Component } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'
import styled from 'styled-components'


///////////////////////////////////////////////////////////////////////////////////
// CLASS
///////////////////////////////////////////////////////////////////////////////////
class UserProfile extends Component {

    state = {
        user: {}
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

    render() {
        const{user} = this.state
        return (
            <Profile>
                <div>
                    <h1>{user.userName}'s Profile</h1>
                </div>    
                <div>
                    <img src={user.photoUrl} alt="Profile Pic" />              
                </div>
                <div>
                    <h3>User Name: {user.userName}</h3>
                    <a href='/city'> CITIES </a>|
                    <a href='/city/:cityId/arch'> ARCHITECTURE </a>
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