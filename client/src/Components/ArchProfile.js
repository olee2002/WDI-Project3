import React, { Component } from 'react'
import axios from 'axios'

class ArchProfile extends Component {


    state = {
        arch: {}
    }
    componentWillMount() {
        this.getArchInfo()
    }
    //get a sigle building information
    getArchInfo = async () => {
        const { cityId } = this.props.match.params
        const { archId } = this.props.match.params
        const res = await axios.get(`/api/city/${cityId}/arch/${archId}`)
        console.log('From Arch Profile:'+res.data)
        this.setState({ arch: res.data })
    }
    //delete building
    deleteArch = async () => {
        const { cityId } = this.props.match.params
        const { archId } = this.props.match.params
        const res = await axios.delete(`/api/city/${cityId}/arch/${archId}`)
        console.log(res.data)
        this.setState({ user: res.data, redirect: true })
    }



    render() {
          const {arch} = this. state

        return (
            <div>
                 <div>
                <a href='/'> HOME </a>|
                <a href='/users'> USERS</a>|
                <a href='/city'> CITIES</a>|
                <a href={`/city/${this.props.match.params.cityId}/arch`}> ARCH </a>
            </div>
                <div>
                    Architecture profile
                </div>

                <div>
                    <img src={arch.photoUrl} />
                    {arch.name}
                    {arch.address}

                    <button onClick = {this.deleteArch}>delete</button>
                </div >
            </div>

        )

    }

}

export default ArchProfile