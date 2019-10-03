import React from 'react';
import styled from 'styled-components';

//CSS
import { colours } from './config/colours.js';
import { breakpoints } from './config/breakpoints.js';
import Step from './components/Step';

//Images
import logoURL from './images/wp-logo.svg';
import closeURL from './images/close.svg';

const Header = styled.header`
  background: ${ colours.highlight };
  display: flex;
  align-items: center;
`;

const TransparentButton = styled.button`
  background: none;
  border: none;
  border-right: 1px solid ${ colours.blue40 };
  padding: 10px;
  margin-right: 20px;

  :hover {
    background: ${ colours.primary };
    border-right-color: ${ colours.primary };
    cursor: pointer;
  }
`;

const Logo = styled.img`
  display: block;
  width: 146px;
`

const SecureCheckout = styled.span`
  font-size: 1em;
  color: ${ colours.blue5 };
  margin-left:5px;
`

const Container = styled.div`
  @media( ${ breakpoints.tabletUp } ) {
    display: flex;
    justify-content: space-between;
    max-width: 910px;
    margin: 0 auto;
  }
`;

const Column = styled.div`
  background: ${ colours.white };
  padding: 24px;

  @media( ${ breakpoints.tabletUp } ) {
    border: 1px solid ${ colours.gray5 };
    margin-top: 32px;
    box-sizing: border-box;
  }
`;

const LeftColumn = styled(Column)`
  @media( ${ breakpoints.tabletUp } ) {
    width: 532px;
  }
`;

const PageTitle = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 24px;  
  color: ${ colours.black };
`;

const DomainUrl = styled.p`
  margin: 0 0 24px 0;
  color: ${ colours.gray50 };
`

const RightColumn = styled(Column)`
  @media( ${ breakpoints.tabletUp } ) {
    width: 354px;
  }
`;

function App() {
  return (
    <div>
      <Header>
        <TransparentButton>
          <img src={ closeURL } alt="Close" />
        </TransparentButton>
        <Logo src={ logoURL } alt="WordPress.com" /> 
        <SecureCheckout>Secure checkout</SecureCheckout>
      </Header>

      <Container>
        <LeftColumn>
          <PageTitle>Complete your purchase</PageTitle>
          <DomainUrl>yourdomain.tld</DomainUrl>

          <Step
            number="1"
            title="Pick a payment method"
            display="content" />

          <Step
            number="2"
            title="Enter your billing details"
            display="none" />

          <Step
            number="3"
            title="Review your order"
            display="summary" />

        </LeftColumn>
        <RightColumn>
          Right column
        </RightColumn>
      </Container>
    </div>
  );
}

export default App;
