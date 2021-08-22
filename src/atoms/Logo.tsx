import styled from 'styled-components'
import LogoUrl from "../img/logo.png"

const StyledLogo = styled.img`
    max-width: 100%;
    width: 500px;
    height: auto;
`

export const Logo: React.FC = () => (
    <StyledLogo src={LogoUrl} alt="Bitbay"/>
)