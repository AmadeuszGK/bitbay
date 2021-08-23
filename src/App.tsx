import { OrderBook } from './organisms/OrderBook';
import { theme } from './theme/MainTheme';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './theme/GlobalStyle';
import { Logo } from './atoms/Logo';
import "./fonts.css";
import { Footer } from './atoms/Footer';

const AppWrapper = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: ${({ theme }) => theme.paddingDesktop}; 

    @media (max-width: 767.98px) {
      padding: ${({ theme }) => theme.paddingPhone}; 
    }

    @media (min-width: 768px) and (max-width: 991.98px) {
      padding: ${({ theme }) => theme.paddingTablet}; 
    }

    @media (min-width: 992px) and (max-width: 1600px) {
      padding: ${({ theme }) => theme.paddingLaptop}; 
    }
`

const App = () => {

  return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
          <AppWrapper>
              <Logo />
              <OrderBook/>
              <Footer />
          </AppWrapper>
      </ThemeProvider>
  );
}

export default App;
