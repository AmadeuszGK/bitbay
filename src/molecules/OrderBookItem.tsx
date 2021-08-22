import React from 'react';
import styled from 'styled-components'
import { OrderbookDataItemType } from '../organisms/OrderBook';

type OrderBookItemType = {
    orderbook: OrderbookDataItemType;
}

const StyledOrderBookItem = styled.div`
    display: flex;
    width: 100%;

    span:nth-child(1) {
        width: 25%;
    };
    span:nth-child(2), span:nth-child(3) {
        width: 30%;
    };
    span:nth-child(4) {
        width: 15%;
    };
`

const OrderBookItemValue = styled.span`
    padding: 5px 0;
    font-size: 14px;

    @media (max-width: 767.98px) {
        font-size: 12px;
    }
`


export const OrderBookItem: React.FC<OrderBookItemType> = ({orderbook}) => (
    <StyledOrderBookItem>
        <OrderBookItemValue>{parseFloat(orderbook.ra).toFixed(2)}</OrderBookItemValue>
        <OrderBookItemValue>{parseFloat(orderbook.ca).toFixed(8)}</OrderBookItemValue>
        <OrderBookItemValue>{(parseFloat(orderbook.ca)*parseFloat(orderbook.ra)).toFixed(2)}</OrderBookItemValue>
        <OrderBookItemValue>{orderbook.co}</OrderBookItemValue>
    </StyledOrderBookItem>
)