import React from 'react';
import styled from 'styled-components'
import LogoUrl from "../img/loader.gif"

const StyledLoader = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const LoaderGif = styled.img`
`

export const Loader: React.FC = () => (
    <StyledLoader>
        <LoaderGif src={LogoUrl} alt="Loader"/>
    </StyledLoader>
)