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
    color: white;
    /* margin-top: 200px; */
    font-size: 2vh;
    padding: 20px
`