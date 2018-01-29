import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'
import FaTrash from 'react-icons/lib/fa/trash'
import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';


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
            <div>

                <Nav>
                    <a href='/'> HOME </a>|
                <a href='/users'> USERS</a>|
                <a href='/city'> CITIES</a>|
                <a href={`/city/${cityId}/arch`}> ARCH </a>
                </Nav>
                <ArchContainer>

                    <br />
                    <div>
                        <h2>Architecture profile</h2>
                    </div>
                    <div>
                        <h1 onClick={this.deleteArch}><FaTrash /></h1>
                    </div >
                    <div>
                        <img src={arch.photoUrl} />
                    </div>
                    <div>
                        <h3> {arch.name}</h3>
                    </div>
                    <div>
                        {arch.address}
                    </div>
                   

                </ArchContainer >
                 
                <ImagesUploader
                        url="http://localhost:4000/multiple"
                        optimisticPreviews
                        onLoadEnd={(err) => {
                            if (err) {
                                console.error(err);
                            }
                        }}
                        label="Upload multiple images"
                    />
            </div>
        )
    }
}

export default ArchProfile

///////////////////////////////////////////////////////////////////////////////////
//STYLED-COMPONENTS
///////////////////////////////////////////////////////////////////////////////////
const Nav = styled.div`
color:white;
a{
    text-decoration:none;
    color:white
}
`
const ArchContainer = styled.div`

  display: flex;
  flex-direction: column;
  justify-content:
  align-items: center;
  margin: 10px;
  padding: 20px;
  color: white;
    font-size: 2vh;
    text-shadow: 1px 1px 0px black;
 

  img{
    border-radius: 2vh;
    width: 30vh;
    height: 30vh;
    margin: 2vh;
    border: 1px solid white;
    box-shadow: 3px 3px black;
    }
  `