// Importing React
import React from 'react'
import { Redirect} from 'react-router-dom'
import styled from 'styled-components'
// import UserProfile from './UserProfile'

///////////////////////////////////////////////////////////////////////////////////
// STATELESS FUNCTION
///////////////////////////////////////////////////////////////////////////////////
const UserAddForm = (props) => {

    //after the post is done, redirect to the user profile page
    if (props.redirect) {
        return (<Redirect to={`/users/${props.id}`} />)
    }
    return (
        <AddUser>
            <h2>Add User</h2>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <br />
                    <input
                        value={props.user.userName}
                        type="text"
                        placeholder="Name"
                        onChange={(e) => props.handleChange(e)}
                        name="userName"
                    />
                </div>
                <div>
                    <br />
                    <input
                        value={props.user.photoUrl}
                        placeholder="image url"
                        onChange={(e) => props.handleChange(e)}
                        name="photoUrl"
                        type="text"
                    />
                </div>
                
                <br />
                <button>Submit</button>
            </form>
        </AddUser>
    )
}

export default UserAddForm

///////////////////////////////////////////////////////////////////////////////////
//STYLED-COMPONENTS
///////////////////////////////////////////////////////////////////////////////////

const AddUser = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    color: black;
    /* margin-top: 200px; */
    font-size: 2.5vh;
    padding: 15px;
    text-shadow: 3px 3px 0px #bdbdbd;
    input{
        display:flex;
        align-items: center;
        border:none;
        width: 150px;
        height: 30px;
        border-radius: 3px;
        box-shadow:1.25px 1.25px 0px black
    };
    button{
        border:none;
        height: 30px;
        width: 70px;
        margin-left: 40px;
        border-radius: 7px;
        box-shadow:1px 1px 0px black;
        font-family: 'Architects Daughter';
    }
`