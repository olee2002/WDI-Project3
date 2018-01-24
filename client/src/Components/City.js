import React from 'react'
import styled from 'styled-components'



const City = (props) => {
    return (
        <CityWrapper>
            <div>
                <img src={props.city.photoUrl} alt="City Pic" />
            </div>
            <input type="text"
                name="title"
                value={props.city.title}
                onChange={(event) => props.handleChange(props.city, event)}
                onBlur={() => { props.updateCity(props.city) }} />

            <textarea name="description"
                value={props.city.description}
                onChange={(event) => props.handleChange(props.city, event)}
                onBlur={() => { props.updateCity(props.city) }} />

            <button onClick={() => { props.deleteCity(props.city) }}>
                Delete city
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
  margin: 20px;
  padding: 20px;
  background-color: lightblue;
  
  input {
    background-color: transparent;
    border: none;
    margin-bottom: 10px;
    font-size: 18px;
    
    &:focus {
      outline: none;
    }
  }
  
  textarea {
    background-color: transparent;
    border: none;
    height: 100px;
    
    &:focus {
      outline: none;
    }
  }
`