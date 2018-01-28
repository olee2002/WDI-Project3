// Importing React
import React from 'react'
import styled from 'styled-components'

//Importing components
import City from './City'
import ArchPage from './ArchPage'

///////////////////////////////////////////////////////////////////////////////////
// CLASS
///////////////////////////////////////////////////////////////////////////////////
const CityList = (props) => {
    // console.log('Props from CityLIst:'+JSON.stringify(props))
    return (
        <Card>
            <FlexRowCentered>
                {
                    props.cities.map((city, i) => {

                        // console.log(city)
                        return (
                            <div>

                                <City city={city} {...props} key={i} />
                               
                            </div>
                        )
                    })
                }
            </FlexRowCentered>
        </Card>
    )
}

export default CityList

///////////////////////////////////////////////////////////////////////////////////
//STYLED-COMPONENTS
///////////////////////////////////////////////////////////////////////////////////



const Card = styled.div`

  margin:0 auto;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  
  /* background-color:#212121; */
  align-items: center;
  padding: 20px;
  text-shadow: 1px 1px 0px #3f3f3f;
 
`

const FlexContainerCentered = styled.div`
  display: flex;
  align-items: center;
`

const FlexRowCentered = FlexContainerCentered.extend`
   flex-direction: row;
   flex-wrap: wrap;
`