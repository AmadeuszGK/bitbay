import React from 'react';
import styled from 'styled-components'

type SpreadProps = {
    value?: string;
}


const StyledSpread = styled.span`
    @media (max-width: 767.98px) {
        margin: 16px 0;
    }
`


export const Spread: React.FC<SpreadProps> = ({value}) => (
    <StyledSpread><b>SPREAD:</b> {value}</StyledSpread>
)