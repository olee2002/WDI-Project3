// Importing React
import React,{Component} from 'react'
import axios from 'axios'

///////////////////////////////////////////////////////////////////////////////////
// CLASS
///////////////////////////////////////////////////////////////////////////////////
class ArchPage extends Component {
    state = {
        city: {}
    }
    componentWillMount() {
        this.getcityInfo()
    }

    getcityInfo = async () => {
        try {
            const { cityId } = this.props.match.params

            const res = await axios.get(`/api/city/${cityId}`)
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