import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

type DropdownProps = {
    options: string[];
    defaultOption: string;
    setCurrencyPair: (currency: string) => void;
}

type DropdownItemProps = {
    isActive: boolean;
}

type DropdownBoxProps = {
    isDropdownOpen: boolean;
}

const DropdownBox = styled.div<DropdownBoxProps>`
    position: absolute;
    width: 100%;
    top: 53px;
    left: 0;
    display: block;
    overflow-y: ${({isDropdownOpen}) => isDropdownOpen ? "scroll" : "hidden"};
    transition: max-height 0.2s ease-in-out;
    max-height: ${({isDropdownOpen}) => isDropdownOpen ? "400px" : "0"};
    border: 1px solid ${({ theme }) => theme.greyColor};
    border-top: none;
    
    :-webkit-scrollbar-track
    {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #F5F5F5;
    }

    ::-webkit-scrollbar
    {
        width: 6px;
        background-color: #F5F5F5;
    }

    ::-webkit-scrollbar-thumb
    {
        background-color: ${({ theme }) => theme.greyColor};
    }




`;

const DropdownWrapper = styled.div<DropdownBoxProps>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 56px;
    z-index: 2;
    font-size: 18px;
    font-weight: 300;
    width: 200px;

    
    @media (max-width: 991.98px) {
        width: 150px;
    }
`

const DropdownLabel = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 16px;
    width: 100%;
    height: 51px;
    align-items: center;
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.greyColor};
`;


const Arrow = styled.span`
    width: 1.25rem;
    height: 1.25rem;
    display: inline-block;
    position: relative;
`;

const StyledSpan = styled.span`
    top: 0.5rem;
    position: absolute;
    width: .75rem;
    height: .1rem;
    background: ${({ theme }) => theme.blackColor};
    display: inline-block;
    transition: all .2s ease;

    &:first-of-type {
        left: 0;
        transform: rotate(45deg);
    }

    &:last-of-type {
        right: 0;
        transform: rotate(-45deg);
      }

    &.active:first-of-type {
        transform: rotate(-45deg);
    }

    &.active:last-of-type {
        transform: rotate(45deg);
    }
`;

const DropdownItem = styled.li<DropdownItemProps>`
    display: flex;
    align-items: center;
    width: 100%;
    height: 51px;
    padding: 0 16px;
    text-align: left;
    font-weight: ${({isActive}) => isActive ? "bold" : "500"};
    color: ${({ theme }) => theme.blackColor};
    cursor: pointer;
    margin-left: 0;
    background-color: ${({ theme }) => theme.whiteColor};
    &:hover {
        color: ${({ theme }) => theme.blackColor};
        background-color: ${({ theme }) => theme.whiteHoverColor};
    }
`;

const CurrentPair = styled.span`
    color: ${({ theme }) => theme.blackColor};
    font-weight: bold;
`;

 
const Dropdown: React.FC<DropdownProps> = ({options, defaultOption, setCurrencyPair}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [currentChoice, setCurrentChoice] = useState<string>(defaultOption);

    const handleGetOption = (option: string) => {
        setCurrentChoice(option);
        setCurrencyPair(option);
        setIsDropdownOpen(false);
    }

    const optionsItems = options.sort((a,b) => a < b ? -1 : 1).map(option => 
    <DropdownItem key={option} onClick={() => handleGetOption(option)} isActive={currentChoice === option ? true : false}>{option}</DropdownItem>)

    return ( 
        <DropdownWrapper isDropdownOpen={isDropdownOpen}>
                <DropdownLabel onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    <CurrentPair>{currentChoice}</CurrentPair>
                    <Arrow>
                        <StyledSpan className={isDropdownOpen ? "active" : ""}/>
                        <StyledSpan className={isDropdownOpen ? "active" : ""}/>
                    </Arrow>
                </DropdownLabel>
            <DropdownBox isDropdownOpen={isDropdownOpen}>
                {optionsItems}
            </DropdownBox>
        </DropdownWrapper>
     );
}
 
export default Dropdown;