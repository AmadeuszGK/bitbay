import React from 'react';
import styled from 'styled-components'

type OrderBookTitleProps = {
    text: string;
    textColor: "red" | "green";
    colorfullText: string;
}

type ColorfullTextProps = Pick<OrderBookTitleProps, "textColor">

const StyledOrderBookTitle = styled.div`
    margin: 10px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Text = styled.h4`
    text-transform: uppercase;

    
    @media (max-width: 767.98px) {
        font-size: 22px;
    }
`

const ColorfullText = styled.h4<ColorfullTextProps>`
    color: ${({textColor}) => textColor === "red" ? "#E83C51" : "#6de22e"};
    margin-left: 5px;
    text-transform: uppercase;
`

export const OrderBookTitle: React.FC<OrderBookTitleProps> = ({text, textColor, colorfullText}) => (
    <StyledOrderBookTitle>
        <Text>{text}</Text>
        <ColorfullText textColor={textColor}>{colorfullText}</ColorfullText>
    </StyledOrderBookTitle>
)