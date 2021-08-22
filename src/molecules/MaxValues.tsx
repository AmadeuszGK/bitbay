import React from 'react';
import styled from 'styled-components'

type MaxValuesProps = {
    highestValue?: string;
    lowestValue?: string;
}

const MaxValuesWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const MaxValueItem = styled.span`
`


export const MaxValues: React.FC<MaxValuesProps> = ({highestValue, lowestValue}) => (
    <MaxValuesWrapper>
        <MaxValueItem><b>NAJWYŻSZA 24H:</b> {highestValue ? parseFloat(highestValue).toFixed(2) : "---"}</MaxValueItem>
        <MaxValueItem><b>NAJNIŻSZA 24H:</b>  {lowestValue ? parseFloat(lowestValue).toFixed(2) : "---"}</MaxValueItem>
    </MaxValuesWrapper>
)