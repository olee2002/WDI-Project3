// Importing React
import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

//Importing components
import CityList from './CityList'

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
        newCities.unshift(newCity)
        this.setState({ cities: newCities })
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
        try {

            await axios.patch(`/api/cities/${city._id}`, city)

        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <CityListAll>

                <div>
                    <h1>List Of Cities</h1>
                    <div onClick={this.createCity}>Add New City</div>
                </div>

                <CityList cities={this.state.cities}
                    handleChange={this.handleChange}
                    updateCity={this.updateCity}
                    deleteCity={this.deleteCity} />

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
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* background-color:#212121; */
  align-items: center;
  padding: 20px;
  text-shadow: 4px 4px 0px #7e7e7e;
`