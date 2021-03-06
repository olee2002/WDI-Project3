// Importing React
import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'



//Importing components
import CityList from './CityList'
// import ArchPage from './ArchPage'

///////////////////////////////////////////////////////////////////////////////////
// CLASS
///////////////////////////////////////////////////////////////////////////////////
class cityPage extends Component {

    state = {
        cities: []
    }

    async componentWillMount() {
        const res = await axios.get('/api/city')
        this.setState({ cities: res.data })
    }

    createCity = async () => {
        const res = await axios.post(`/api/city`)
        const newCity = res.data

        const newCities = [...this.state.cities]
        newCities.push(newCity)
        this.setState({ cities: newCities })
        console.log(this.state.cities)
        // const reload = await window.location.reload()
    }

    deleteCity = async (city) => {
        try {
            await axios.delete(`/api/city/${city._id}`)

            const indexToDelete = this.state.cities.indexOf(city)
            const newCities = [...this.state.cities]
            newCities.splice(indexToDelete, 1)

            this.setState({ cities: newCities })
        } catch (error) {
            console.log(error)
        }
    }

    handleChange = (city, event) => {
        const updatedCities = [...this.state.cities]
        const cityToUpdate = updatedCities.find((newCity) => {
            return newCity._id === city._id
        })

        cityToUpdate[event.target.name] = event.target.value
        this.setState({ cities: updatedCities })
    }

    updateCity = async (city) => {
       
        console.log('Updated:'+JSON.stringify(city))
        console.log('UpdatedId:'+JSON.stringify(city._id))
        try {
           const res = await axios.patch(`/api/city/${city._id}`, city)
           console.log(res.data)
    
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <CityListAll>
                <div>
                    <a href='/'> HOME </a>|
                    <a href='/users'> USERS </a>
                </div>
                <br />
                <div>
                    <h1>LIST OF CITIES</h1>
                    <button onClick={this.createCity}>NEW CITY</button>
                </div>
               
                <CityList 
                    cities={this.state.cities}
                    handleChange={this.handleChange}
                    updateCity={this.updateCity}
                    deleteCity={this.deleteCity} 
                    {...this.props}
                    />
                    
 
            </CityListAll>
        )
    }
}

export default cityPage


///////////////////////////////////////////////////////////////////////////////////
//STYLED-COMPONENTS
///////////////////////////////////////////////////////////////////////////////////

const CityListAll = styled.div`

  margin:0 auto;
  margin-top:20px;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background-color:#212121; */
  align-items: center;
  color:white;
  padding: 20px;
 a{ 
  text-decoration: none;
  color:white};
  h1{
  text-shadow: 2px 2px 0px #545454;}
  button{
      margin: 0 auto;
      height: 5vh;
      border: 1px solid white;
      border-radius:5px;
      font-family: 'Montserrat', sans-serif;
      box-shadow: 1.5px 1.5px 0px #3f3f3f;}
`
