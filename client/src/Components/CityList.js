import React from 'react'
import City from './City'
import styled from 'styled-components'



const CityList = (props) => {
    return (
        <Card>
            <FlexRowCentered>
                {
                    props.cities.map((city,i) => {
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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid lightgray;
`

const FlexContainerCentered = styled.div`
  display: flex;
  align-items: center;
`

const FlexRowCentered = FlexContainerCentered.extend`
   flex-direction: row;
   flex-wrap: wrap;
`