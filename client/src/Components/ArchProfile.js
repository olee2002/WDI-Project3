import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'
import FaTrash from 'react-icons/lib/fa/trash'


///////////////////////////////////////////////////////////////////////////////////
// CLASS
///////////////////////////////////////////////////////////////////////////////////
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
        console.log('From Arch Profile:' + res.data)
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
        const { arch } = this.state
        const { cityId } = this.props.match.params
        if (this.state.redirect) {
            return (<Redirect to={`/city/${cityId}/arch`} />)
        }
        
        return (
            <ArchContainer>
                <div>
                    <a href='/'> HOME </a>|
                <a href='/users'> USERS</a>|
                <a href='/city'> CITIES</a>|
                <a href={`/city/${cityId}/arch`}> ARCH </a>
                </div>
                <br/>
                <div>
                    Architecture profile
                </div>

                <div>
                    <img src={arch.photoUrl} />
                </div>
                <div>
                   <h2> {arch.name}</h2>
                </div>
                <div>
                    {arch.address}
                </div>
                <div>
                    <h1 onClick={this.deleteArch}><FaTrash /></h1>
                </div >
            </ArchContainer >
        )
    }
}

export default ArchProfile

///////////////////////////////////////////////////////////////////////////////////
//STYLED-COMPONENTS
///////////////////////////////////////////////////////////////////////////////////


const ArchContainer = styled.div`

  display: flex;
  flex-direction: column;
  justify-content:
  align-items: center;
  margin: 10px;
  padding: 20px;
  text-shadow: 1px 1px 0px rgba(0,0,0,0.2);
  
  img{
    border-radius: 2vh;
    width: 30vh;
    height: 30vh;
    margin: 2vh;
    border: 1px solid white;
    box-shadow: 3px 3px black;
    }
  `