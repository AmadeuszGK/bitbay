import React from 'react';
import styled from 'styled-components'


const StyledOrderBookItemsHeader = styled.div`
    display: flex;
    width: 100%;

    h6:nth-child(1) {
        width: 25%;
    };
    h6:nth-child(2), h6:nth-child(3) {
        width: 30%;
    };
    h6:nth-child(4) {
        width: 15%;
    };
`

const OrderBookItemsTitle = styled.h6`
    text-transform: uppercase;
    font-size: 12px;
`

export const OrderBookItemsHeader: React.FC = () => (
    <StyledOrderBookItemsHeader>
        <OrderBookItemsTitle>Kurs</OrderBookItemsTitle>
        <OrderBookItemsTitle>Ilość</OrderBookItemsTitle>
        <OrderBookItemsTitle>Wartość</OrderBookItemsTitle>
        <OrderBookItemsTitle>Liczba ofert</OrderBookItemsTitle>
    </StyledOrderBookItemsHeader>
)