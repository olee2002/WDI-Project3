// Importing React
import React,{Component} from 'react'
import axios from 'axios'

///////////////////////////////////////////////////////////////////////////////////
// CLASS
///////////////////////////////////////////////////////////////////////////////////
class ArchPage extends Component {
    state = {
        arch: {}
    }
    componentWillMount() {
        this.getcityInfo()
    }

    getcityInfo = async () => {
        try {
            const { archId } = this.props.match.params

            const res = await axios.get(`/api/city/${cityId}/arch`)
            this.setState({ city: res.data })
        } catch (err) {
            console.log(err)
        }
    }


render(){

    return(

        <div>This is the architecture page!!</div>
    )
}


}

export default ArchPage


///////////////////////////////////////////////////////////////////////////////////
//STYLED-COMPONENTS
///////////////////////////////////////////////////////////////////////////////////