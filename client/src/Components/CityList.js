// Importing React
import React from 'react'
import styled from 'styled-components'

//Importing components
import City from './City'

///////////////////////////////////////////////////////////////////////////////////
// CLASS
///////////////////////////////////////////////////////////////////////////////////
const CityList = (props) => {
    return (
        <Card>
            <FlexRowCentered>
                {
                    props.cities.map((city, i) => {
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
  text-shadow: 3px 3px 0px #bdbdbd;
 
`

const FlexContainerCentered = styled.div`
  display: flex;
  align-items: center;
`

const FlexRowCentered = FlexContainerCentered.extend`
   flex-direction: row;
   flex-wrap: wrap;
`