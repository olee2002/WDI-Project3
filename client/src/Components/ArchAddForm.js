
// Importing React
import React from 'react'
import { Redirect} from 'react-router-dom'
import styled from 'styled-components'


///////////////////////////////////////////////////////////////////////////////////
// STATELESS FUNCTION
///////////////////////////////////////////////////////////////////////////////////
const ArchAddForm = (props) => {
   
    // after the post is done, redirect to the arch profile page
    // if (props.redirect) {
    //     console.log('CityIDfrom ArchAddform'+props.cityId)
    //     return (<Redirect to={`/city/${props.cityId}/arch/`} />)
    // }
    return (
        <AddArch>
            <h2>Add arch</h2>
            <form 
            onSubmit={props.handleSubmit}
            >
                <div>
                    <br />
                    Name:
                    <input
                        value={props.arch.name}
                        type="text"
                        placeholder="Name"
                        onChange={props.handleChange}
                        name="name"
                    />
                </div>
                <div>
                    <br />
                    Image URL
                    <input
                        value={props.arch.photoUrl}
                        placeholder="image url"
                        onChange={props.handleChange}
                        name="photoUrl"
                        type="text"
                    />
                </div>
                
                <br />
                <button>Submit</button>
            </form>
        </AddArch>
    )
}

export default ArchAddForm

///////////////////////////////////////////////////////////////////////////////////
//STYLED-COMPONENTS
///////////////////////////////////////////////////////////////////////////////////

const AddArch = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    color: white;
    font-size: 2vh;
    text-shadow: 1px 1px 0px black;
    input{
        display:flex;
        margin-top:6px;
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
        font-size: 2vh;
        margin-left: 40px;
        border-radius: 7px;
        box-shadow:1px 1px 0px black;
        font-family: 'Montserrat', sans-serif;
    }
`