import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { Loader } from '../atoms/Loader';
import { OrderBookTitle } from '../atoms/OrderBookTitle';
import { Spread } from '../atoms/Spread';
import Dropdown from '../molecules/Dropdown';
import { MaxValues } from '../molecules/MaxValues';
import { OrderBookItem } from '../molecules/OrderBookItem';
import { OrderBookItemsHeader } from '../molecules/OrderBookItemsHeader';

export type OrderbookDataItemType = {
    ra: string, 
    ca: string, 
    sa: string, 
    pa: string, 
    co: number
  }

export type OrderbookDataType = {
    status: string;
    timestamp: string, 
    seqNo: string, 
    buy: OrderbookDataItemType[];
    sell: OrderbookDataItemType[];
  }

const StyledOrderBook = styled.div`
    background-color: ${({ theme }) => theme.whiteColor};
    box-shadow: ${({ theme }) => theme.boxShadow};
    padding: 40px;
    width: 100%;
    border-radius: 8px;
    margin-bottom: 80px;

    @media (max-width: 767.98px) {
        padding: 30px 16px;
    }
`

const OrderBookWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;

    .buy {
        padding-right: 20px;
    }

    .sell {
        padding-left: 20px;
    }

    @media (max-width: 991.98px) {
      .buy {
        padding-right: 0;
      }
      .sell {
          padding-left: 0;
      }
    }
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 20px 0 40px 0;

    @media (max-width: 767.98px) {
      flex-direction: column;
      margin: 10px 0 0 0;
    }
`

const OrderBookItems = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    min-height: 450px;

    @media (max-width: 991.98px) {
      width: 100%;
      min-height: 400px;
    }
`

export const OrderBook: React.FC = () => {
    const defalutCurrencyPair: string = "BTC-PLN";
    const [orderbookData, setOrderbookData] = useState<OrderbookDataType>();
    const [avaiableCurrencyPairs, setAvaiableCurrencyPairs] = useState<string[]>();
    const [currencyPair, setCurrencyPair] = useState<string>(defalutCurrencyPair);
    const [highestValue, setHighestValue] = useState<string>();
    const [lowestValue, setLowestValue] = useState<string>();


    // Get avaiable currency pairs
    useEffect(() => {
        const fetchData = async () => {
          await fetch("https://api.bitbay.net/rest/trading/ticker")
          .then(res => res.json())
          .then(
            (result) => {
              setAvaiableCurrencyPairs(Object.keys(result.items))
            },
            (error) => {
                console.log("error", error)
            }
          )
        };
        fetchData()
      }, []);
    
       // Get the highest and the lowest value from last 24h
      useEffect(() => {
        const fetchData = async () => {
          await fetch(`https://api.bitbay.net/rest/trading/stats/${currencyPair}`)
          .then(res => res.json())
          .then(
            (result) => {
              setHighestValue(result.stats.h);
              setLowestValue(result.stats.l);
            },
            (error) => {
                console.log("error", error)
            }
          )
        };
        fetchData()
      }, [currencyPair]);
    
       // Get the orderbook for choosen currency pair
      useEffect(() => {
        const fetchData = async () => {
          await fetch(`https://api.bitbay.net/rest/trading/orderbook-limited/${currencyPair}/10`)
          .then(res => res.json())
          .then(
            (result) => {
              setOrderbookData(result);
            },
            (error) => {
                console.log("error", error)
            }
          )
        };
        
        // If You want to refresh data every second
        // const timer = setTimeout(() => {
            // fetchData();
        // }, 1000);
        // return () => clearTimeout(timer);

        fetchData();
      }, [currencyPair]);
      
    return (
        <StyledOrderBook>
            <Header>
                {avaiableCurrencyPairs && <Dropdown options={avaiableCurrencyPairs} defaultOption={defalutCurrencyPair} setCurrencyPair={setCurrencyPair}/>}
                <Spread value={orderbookData ? (parseFloat(orderbookData.sell[0].ra) - parseFloat(orderbookData.buy[0].ra)).toFixed(2) : "---"} />
                <MaxValues highestValue={highestValue} lowestValue={lowestValue}/>
            </Header>
            <OrderBookWrapper>
                <OrderBookItems className="buy">
                    <OrderBookTitle text="Oferty skupu -" colorfullText="BID" textColor="green"/>
                    <OrderBookItemsHeader />
                    {
                        orderbookData?.buy ? orderbookData.buy.map((orderbook, index) => 
                        <OrderBookItem key={index} orderbook={orderbook}/>) : <Loader />
                    }
                </OrderBookItems>
                <OrderBookItems className="sell">
                    <OrderBookTitle text="Oferty sprzedaży -" colorfullText="ASK" textColor="red"/>
                    <OrderBookItemsHeader />
                    {
                        orderbookData?.sell ? orderbookData.sell.map((orderbook, index) => 
                        <OrderBookItem key={index} orderbook={orderbook}/>) : <Loader />
                    }
                </OrderBookItems>
            </OrderBookWrapper>
        </StyledOrderBook>
    )
}
