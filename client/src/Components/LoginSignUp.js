import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
// import UserProfile from './UserProfile'

const LoginSignUp = (props) => {

    //after the post is done, redirect to the user profile page
    if (props.redirect) {
        return (<Redirect to={`/users/${props.id}`} />)
    }
    return (
        <div>
            <h2>Sign-Up</h2>
            <form onSubmit={(e) => props.handleSubmit(e)}>
                <div>
                    <br />
                    <input
                        type="text"
                        placeholder="Name"
                        onChange={(e) => props.handleChange(e)} name="name"
                        value={props.user.userName}
                    />
                </div>
                <div>
                    <br />
                    <input
                        placeholder="image url"
                        onChange={(e) => props.handleChange(e)} name="img"
                        type="text" value={props.user.userName}
                    />
                </div>
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default LoginSignUp;