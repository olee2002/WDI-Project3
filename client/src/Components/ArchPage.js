// Importing React
import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

//Importing Components
import ArchAddForm from './ArchAddForm'
import ArchProfile from './ArchProfile'

///////////////////////////////////////////////////////////////////////////////////
// CLASS
///////////////////////////////////////////////////////////////////////////////////
class ArchPage extends Component {

    state = {
        arches: [],
        newArch: {},
        redirect: false,
        newId: ''
    }
    componentWillMount() {
        this.getArchInfo()
    }
    getArchInfo = async () => {
        try {
            const { cityId } = this.props.match.params
            const res = await axios.get(`/api/city/${cityId}/arch/`)
            this.setState({ arches: res.data })
            console.log('CityArchDATA:' + this.state.arches)
        } catch (err) {
            console.log(err)
        }
    }
    //input data
    handleChange = (e) => {
        console.log('CArchPostHandle1:' + this.state.arches)
        console.log('CArchPost:' + this.state.newArch)
        const newArch = { ...this.state.newArch }
        newArch[e.target.name] = e.target.value
        // console.log('CArchPostHandle:' + JSON.stringify(newArch))
        this.setState({ newArch })
        // console.log('CArchPostRESULT:' + JSON.stringify(newArch))
    }

    //create arch
    handleSubmit = async (e) => {
        e.preventDefault()

        const { cityId } = this.props.match.params
        const arch = this.state.newArch
        const payload = {
            name: this.state.newArch.name,
            address: this.state.newArch.address,
            photoUrl: this.state.newArch.photoUrl
        }
        const res = await axios.post(`/api/city/${cityId}/arch/`, payload)
        // console.log('ThisFromAxios:'+JSON.stringify(res.data))
        this.setState({ redirect: true, newArch: payload })
        console.log('That:'+JSON.stringify(this.state.newArch))
       const reload = await window.location.reload()
    }

    render() {
        const { arches } = this.state
        console.log('ArchID:'+JSON.stringify(this.state.newArch))

        // console.log(arches)
        return (<Container>
            <div>
                <a href='/'> HOME </a>|
                <a href='/users'> USERS</a>|
                <a href='/city'> CITIES</a>
              
            </div>

            <ArchAddForm
                arches={this.state.arches}
                arch={this.state.newArch}
                // id={this.state.newId}
                cityId={this.props.match.params.cityId}
                redirect={this.state.redirect}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
            />

            <ArchBox>

                {arches.map((arch, i) => {

                    return (
                        <ThisArch key={i}>
                         <a href ={`/city/${this.props.match.params.cityId}/arch/${arch._id}`}> 
                         <img src={arch.photoUrl} />
                            </a>
                            <div>
                                {arch.name}
                            </div>
                           
                        </ThisArch>
                    )
                })
                }
            </ArchBox>
        </Container>
        )
    }


}

export default ArchPage


///////////////////////////////////////////////////////////////////////////////////
//STYLED-COMPONENTS
///////////////////////////////////////////////////////////////////////////////////
const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const ArchBox = styled.div`
margin-top: 20px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
color: white;
text-shadow:1.5px 1.5px black;

img{
    border-radius: 2vh;
    width: 20vh;
    height: 20vh;
    margin: 2vh;
    border: 1px solid white;
    box-shadow: 3px 3px black;
    }
`

const ThisArch = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`