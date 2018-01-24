import React, {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
// import UserProfile from './UserProfile'


class LoginSignUp extends Component {
    state = {
        newUser:{
            userName:'Olee',
            photoUrl:'http://www.fillmurray.com/300/300',
        },
        redirect: false,
        newUserId:''
    }
    handleChange = (event) => {
        event.preventDefault()
        //grabs the name from input
        const input = event.target.name
        //set the grabbed name to a user
        const updatedUser = [...this.state.newUser]

        updatedUser[input] = event.target.value
        this.setState({newUser:updatedUser})
        console.log(this.state.newUser)
    }

    handleSubmit = async (event) => {
    
    event.preventDefault()
    //user is payload that is req.body.user on the server side.
    const res = await axios.post('/api/users',{user: this.state.newUser
    })
    console.log(res.data)
    this.setState({redirect: true, newUser:res.data, newUserId: res.data._id})
    }



render(){
    //after the post is done, redirect to the user profile page
    if(this.state.redirect){
return(<Redirect to={`/users/${this.state.newUserId}`} />)
    }

    return(
        <div>
                <h2>Sign-Up</h2>
                <form onSubmit={this.handleSubmit}>
                <div>
                    <br/>
                    <input
                        placeholder="Name"
                        onChange={this.handleChange} name="name"
                        type="text" value={this.state.newUser.userName}
                    />
                </div>
                {/* <br/> */}
                <div>
                    <br/>
                    <input
                        placeholder="image url"
                        onChange={this.handleChange} name="img"
                        type="text" value={this.state.newUser.photoUrl}
                    />
                </div>
                <br/>
                <button>Submit</button>
                </form> 
            </div>
    )}
}
export default LoginSignUp;