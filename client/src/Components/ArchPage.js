// Importing React
import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

//Importing Components
import ArchAddForm from './ArchAddForm'

///////////////////////////////////////////////////////////////////////////////////
// CLASS
///////////////////////////////////////////////////////////////////////////////////
class ArchPage extends Component {

    state = {
        arches: []
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

    render() {
        const { arches } = this.state
        console.log(arches)
        return (<Container>
            <div>
                <a href='/'> HOME </a>|
                <a href='/users'> USERS </a>
            </div>

            <ArchAddForm />

            <ArchBox>

                {arches.map((arch, i) => {
                    return (
                        <div key={i}>
                            <img src={arch.photoUrl} />
                            <br />
                            <div>
                                {arch.name}
                            </div>
                            <div>
                                {arch.address}
                            </div>
                        </div>
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

const ArchBox = styled.div`
margin-top: 20px;
display: flex;
flex-direction: column;
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

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`