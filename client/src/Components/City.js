// Importing React
import React from 'react'
import styled from 'styled-components'


///////////////////////////////////////////////////////////////////////////////////
// STATELESS FUNCTION
///////////////////////////////////////////////////////////////////////////////////
const City = (props) => {
    return (
        <CityWrapper>
            <div>
                Enter City Name
            </div>
            <input type="text"
                name="title"
                value={props.city.title}
                onChange={(event) => props.handleChange(props.city, event)}
                onBlur={() => { props.updateCity(props.city) }} />
            <div>
                Add Description
            </div>
            <textarea name="description"
                value={props.city.description}
                onChange={(event) => props.handleChange(props.city, event)}
                onBlur={() => { props.updateCity(props.city) }} />

            <div>
                <br />
                <a href={`/city/${props.city._id}/arch`}>
                    <button>
                        Go To The Cities
                        </button> </a>
                <button
                    onClick={() => { props.deleteCity(props.city) }}>
                    X
                </button>
            </div>
        </CityWrapper>
    )
}

export default City

///////////////////////////////////////////////////////////////////////////////////
//STYLED-COMPONENTS
///////////////////////////////////////////////////////////////////////////////////

const CityWrapper = styled.div`
  height:30vh;
  width:30vh;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  align-items: center;
  margin: 10px;
  padding: 20px;
  background-color: #696969;
  box-shadow: 3px 3px 0px rgba(0,0,0,0.5);
  input {
    background-color: white;
    border:1px solid darkgray;
    box-shadow: 1px 1px 0px #3f3f3f;
    border-radius:5px;
    font-size: 20px;
    margin: 10px;
    height:4vh;
    width:25vh;
    
  textarea {
    /* background-color: transparent; */
    border-radius:5px;
    padding:20px;
    margin: 10px;
    border: 1px;
    width:30vw;
    height: 150px;
    }
  }
`