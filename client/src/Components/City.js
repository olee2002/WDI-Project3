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
                {/* <img src={props.city.photoUrl} alt="City Pic" /> */}
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

            <button onClick={() => { props.deleteCity(props.city) }}>
                X
        </button>

        </CityWrapper>
    )
}

export default City

///////////////////////////////////////////////////////////////////////////////////
//STYLED-COMPONENTS
///////////////////////////////////////////////////////////////////////////////////

const CityWrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  margin: 20px;
  padding: 20px;
  background-color: lightgrey;
  
  input {
    background-color: transparent;
    border: 1px;
    margin-bottom: 10px;
    font-size: 20px;
    
    &:focus {
      outline: 1px;
    }
  }
  
  textarea {
    background-color: transparent;
    border: none;
    height: 100px;
    }
  }
`