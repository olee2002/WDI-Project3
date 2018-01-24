import React, { Component } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'
// import styled from 'styled-components'



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
        return (
            <div>
                <div>
                    <h1>{this.state.user.userName}'s Profile</h1>
                </div>    
                <div>
                    <img src={this.state.user.imgUrl} alt="Profile Pic" />              
                </div>
            </div>
        )
    }
}

export default UserProfile;