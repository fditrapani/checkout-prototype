//External
import React from 'react';
import styled from 'styled-components';

//Componenets
import Step from './components/Step';
import Button from './components/Button';
import RadioButton from './components/RadioButton';


//CSS
import { colours } from './config/colours.js';
import { breakpoints } from './config/breakpoints.js';

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

  :active {
    background: none;
    border-right: 1px solid ${ colours.blue40 };
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
    align-items: flex-start;
    justify-content: space-between;
    max-width: 910px;
    margin: 0 auto;
  }
`;

const Column = styled.div`
  background: ${ colours.white };
  padding: 24px;
  width: 100%;

  @media( ${ breakpoints.tabletUp } ) {
    border: 1px solid ${ colours.gray5 };
    margin-top: 32px;
    box-sizing: border-box;
  }
`;

const LeftColumn = styled(Column)`
  @media( ${ breakpoints.tabletUp } ) {
    max-width: 532px;
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
    max-width: 354px;
  }
`;

const InstructionalCopy = styled.p`
  font-size: 14px;
  color: ${ colours.gray80 };
  margin: 8px 0 0;
`;

const RadioButtons = styled.div`
  margin-bottom: 16px;
`;

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      paymentMethod: "apple-pay",
    };
  }

  changePaymentMethod = ( changeEvent ) => {
    this.setState({ 
      paymentMethod: changeEvent.target.value
    });
  }

  renderPaymentMethod = () => {
    return(
      <div>
        <RadioButtons>
          <RadioButton 
            label="Apple Pay" 
            value="apple-pay"
            checked={ this.state.paymentMethod === "apple-pay"  }
            onChange={ this.changePaymentMethod } />

          <RadioButton 
            label="Credit or Debit card" 
            value="credit-card"
            checked={ this.state.paymentMethod === "credit-card"  }
            onChange={ this.changePaymentMethod } />

          <RadioButton 
            label="Paypal" 
            value="paypal"
            checked={ this.state.paymentMethod === "paypal"  }
            onChange={ this.changePaymentMethod } />
          </RadioButtons>

        <Button 
          label="Continue"
          state="primary" />
        </div>
    );
  }

  renderPaymentMethodSummary = () => {
    return(
      <div>
        PaymentMethodSummary        
      </div>
    );
  }

  renderBilling = () => {
    return(
      <span>Billing</span>
    );
  }

  renderBillingSummary = () => {
    return(
      <span>BillingSummary</span>
    );
  }  

  renderReview = () => {
    return(
      <span>Review</span>
    );
  }

  renderReviewSummary = () => {
    return(
      <span>ReviewSummary</span>
    );
  }

  render() { 
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
              state="content"
              content={ this.renderPaymentMethod() }
              summary={ this.renderPaymentMethodSummary() } />

            <Step
              number="2"
              title="Enter your billing details"
              state="none"
              content={ this.renderBilling() }
              summary={ this.renderBillingSummary() } />

            <Step
              number="3"
              title="Review your order"
              state="summary"
              borderWidth={ 0 } 
              content={ this.renderReview() }
              summary={ this.renderReviewSummary() } />

          </LeftColumn>
          <RightColumn>
            <Button 
              label="Pay $60"
              state="disabled"
              width="100%" />
            <InstructionalCopy>Confirm your payment method to continue</InstructionalCopy>
          </RightColumn>
        </Container>
      </div>
    );
  }
}
