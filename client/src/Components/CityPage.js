import React, { Component } from 'react'
import axios from 'axios'

import CityList from './CityList'


class cityPage extends Component {

    state = {
        cities: []
    }

    async componentWillMount() {
        const res = await axios.get('/api/city') 
        this.setState({ cities: res.data })
    }

    createcity = async () => {
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
            <div>

                <div>
                    <h1>city Board</h1>
                    <div onClick={this.createcity}>New city</div>
                </div>

                <CityList cities={this.state.cities}
                    handleChange={this.handleChange}
                    updateCity={this.updateCity}
                    deleteCity={this.deleteCity} />

            </div>
        )
    }
}

export default cityPage