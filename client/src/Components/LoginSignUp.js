import React, {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'



class LoginSignUp extends Component {
    state = {
        user:{
            userName:'',
            imgUrl:'',
        },
        redirect: false,
        userId:''
    }
    handleChange = (event) => {
        
        const e = event.target.name
        const user = {...this.state.user}

        user[e] = event.target.value
        this.setState({user})
    }

    handleSubmit = async (event) => {
    
    event.preventDefault()
    const res = await axios.post('/api/users', {
        'user': this.state.user
    })
    this.setState({redirect: true, userId: res.data._id})
    }


render(){
    if(this.state.redirect){
return(<Redirect to={`/users/${this.state.userId}`} />)
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
                        type="text" value={this.state.user.userName}
                    />
                </div>
                {/* <br/> */}
                <div>
                    <br/>
                    <input
                        placeholder="image url"
                        onChange={this.handleChange} name="img"
                        type="text" value={this.state.user.imgUrl}
                    />
                </div>
                <br/>
                <button>Submit</button>
                
                
                <div
                    label="Submit"
                    type="submit"
                    labelStyle={{
                        "fontSize": "20x"
                    }}
                    
                />
                </form> 
            </div>
    )}
}
export default LoginSignUp;