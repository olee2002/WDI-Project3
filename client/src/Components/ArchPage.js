// Importing React
import React, { Component } from 'react'
import axios from 'axios'

///////////////////////////////////////////////////////////////////////////////////
// CLASS
///////////////////////////////////////////////////////////////////////////////////
class ArchPage extends Component {
    state = {
        arches: []
    }
    componentWillMount() {
        this.getcityInfo()
    }

    getcityInfo = async () => {
        try {
            const { cityId } = this.props
            const res = await axios.get(`/api/city/${cityId}/arch/`)
            this.setState({ arches: res.data })
            console.log('CityArchDATA:' + this.state.arches)
        } catch (err) {
            console.log(err)
        }
    }

    render() {


        const { arches } = this.state
        console.log(arches)
        return (
            <div> 
             
                {arches.map((arch, i) => {
                    return (<div key={i}>
                       {arch}
                    </div>)
                })
                }
            </div>
        )
    }


}

export default ArchPage


///////////////////////////////////////////////////////////////////////////////////
//STYLED-COMPONENTS
///////////////////////////////////////////////////////////////////////////////////