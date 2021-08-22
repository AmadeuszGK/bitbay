import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const FooterText = styled.span`
    color: ${({ theme }) => theme.greyColor};
    font-size: 12px;
    text-align: center;
    width: 100%;
    padding: 10px 0;
`

export const Footer: React.FC = () => (
    <StyledFooter>
        <FooterText>Created by Amadeusz Grzesiak</FooterText>
    </StyledFooter>
)