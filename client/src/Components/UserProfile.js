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

   


    handleChange = (event) => {
        //console.log(event)
        //Grabs the input by name
        const attribute = event.target.name
        //Clone the user
        const user = { ...this.state.user }
        //
        user[attribute] = event.target.value
        //
        this.setState({ user})
    }


    updateInfo = async (user) => {
        const { userId } = this.props.match.params
        //Talks to the app.js and grabs the userId off the URL
        const res = await axios.patch(`/api/users/${userId}`)
       
        this.setState({ user: res.data })
    }


    render() {

        return (
            <div>

                <div>
                    <div
                        href="/"
                        label="Home"
                        primary={true}
                        
                    />
                    <div
                        href={'/users'}
                        label="Back to Users"
                        primary={true}

                    />
                </div>

                <div>
                    <h1>{this.state.user.userName}'s Profile</h1>
                </div>
                <br />
                <br />
                <br />
                <div>
                    <img src={this.state.user.imgUrl} alt="Profile Pic" />
                    
                    
                </div>
                <br/>
               

            </div>

        )
    }
}

export default UserProfile;