import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'
// import { Redirect } from 'react-router-dom'
import styled from 'styled-components';

///////////////////////////////////////////////////////////////////////////////////
// Stateless Function
///////////////////////////////////////////////////////////////////////////////////
const UserEditForm = (props)=>(
            
            <EditFormStyle>

               
                <br />
                <form onSubmit={props.handleSubmit}>
                    <div>
                        {/* <label htmlFor="userName">Username: </label> */}
                        <Input 
                        placeholder="UpdateName"
                        onChange={props.handleChange} 
                        name="userName" type="text" 
                        value={props.user.userName} />
                    </div>
                    <br />
                   
                    <button>Edit Name</button>
                    
                    <br />
                    
                </form>
                <br />
            </EditFormStyle>
        )
    


export default UserEditForm;

///////////////////////////////////////////////////////////////////////////////////
//STYLED-COMPONENTS
///////////////////////////////////////////////////////////////////////////////////

const Input = styled.input`
font-family: 'Montserrat', sans-serif;
cursor: pointer;
        display:flex;
        margin-top:6px;
        align-items: center;
        border:1px solid darkgray;
        width: 150px;
        height: 30px;
        border-radius: 3px;
        box-shadow:1.25px 1.25px 0px black;
   

a {
    text-decoration: none;
    color: black;
}`

const EditFormStyle = styled.div`
padding-top: 40px;
text-align: center;
font-family: 'Montserrat', sans-serif;
`