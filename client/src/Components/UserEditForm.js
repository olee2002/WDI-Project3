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

                <div>Edit User</div>
                <br />
                <form onSubmit={props.handleSubmit}>
                    <div>
                        {/* <label htmlFor="userName">Username: </label> */}
                        <input 
                        placeholder="UpdateName"
                        onChange={props.handleChange} 
                        name="userName" type="text" 
                        value={props.user.userName} />
                    </div>
                    
                    <br />
                   
                    <br />
                    <div>
                        <button>Save</button>
                    </div>
                </form>
                <br />
            </EditFormStyle>
        )
    


export default UserEditForm;

///////////////////////////////////////////////////////////////////////////////////
//STYLED-COMPONENTS
///////////////////////////////////////////////////////////////////////////////////

const Input = styled.input`
font-family: "nunito", sans-serif;
cursor: pointer;
font-size: 15px;
font-weight: 9px;
color: black;
border-radius: 3px;
text-align: center;
background-color: rgba(250, 233, 186, 0.2);
padding: 5px;
text-decoration: none;

a {
    text-decoration: none;
    color: black;
}`

const EditFormStyle = styled.div`
padding-top: 40px;
text-align: center;
font-family: "Oxygen", sans-serif;
`