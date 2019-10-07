//External
import React from 'react';
import styled from 'styled-components';

//Componenets
import Step from './components/Step';
import Button from './components/Button';
import RadioButton from './components/RadioButton';
import Field from './components/Field';
import GridRow from './components/GridRow';

//CSS
import { colours } from './config/colours.js';
import { breakpoints } from './config/breakpoints.js';

//Images
import logoURL from './images/wp-logo.svg';
import closeURL from './images/close.svg';
import applePayURL from './images/apple-pay.svg';
import paypalURL from './images/paypal.svg';
import creditCardURL from './images/credit-cards.svg';
import cvvURL from './images/cvv.svg';

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
  padding: 16px;
  width: 100%;
  box-sizing: border-box;

  @media( ${ breakpoints.tabletUp } ) {
    border: 1px solid ${ colours.gray5 };
    margin-top: 32px;
    box-sizing: border-box;
    padding: 24px;
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

const CreditCardFields = styled.div`
  margin-top: -3px;
  padding: 16px 14px 20px;
  background: ${ colours.white };
  position: relative;
  z-index: 11;

  :before {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    border: 3px solid ${ colours.highlight };
    border-top: 0;
    border-radius: 0 0 3px 3px
    box-sizing: border-box;
  }

  :after {
    display: block;
    width: calc( 100% - 6px );
    height: 1px;
    content:"";
    background: ${ colours.gray5 }
    position: absolute;
    top: 0;
    left: 3px;
    z-index: 12;
  }
`

const CreditCardFieldsContent = styled.div`
  position: relative;
  z-index: 15;
`

const CreditCardField = styled(Field)`
  margin-top: 16px;

  :first-child {
    margin-top: 0;
  }
`

const CreditCardFlexFieldArea = styled(GridRow)`
  margin-top: 16px;

  :first-child {
    margin-top: 0;
  }
`

const CVVImage = styled.img`
  margin-top: 36%;
`

// END CSS
//////////////////////////////////////

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      paymentMethod: "apple-pay",
      instructionalCopy: "Confirm your payment method to continue",
      showCreditCardFields: false,
      currentSection: "payment",
      paymentStatus: "content",
      billingStatus: "none",
      reviewStatus: "summary",
    };
  }

  changePaymentMethod = ( changeEvent ) => {
    let instructionalCopy = "Continue to enter your billing information";
    let showCreditCardFields = false;
    
    if( changeEvent.target.value === "credit-card" ) {
      instructionalCopy = "Enter your credit card details to continue";
      showCreditCardFields = true;
    }

    this.setState({ 
      paymentMethod: changeEvent.target.value,
      instructionalCopy: instructionalCopy,
      showCreditCardFields: showCreditCardFields,
    });
  }

  submitPaymentDetails = () => {
    this.setState({ 
      paymentStatus: "completed",
      billingStatus: "content",
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
            imageURL={ applePayURL }
            onChange={ this.changePaymentMethod } />

          <RadioButton 
            label="Credit or debit card"
            value="credit-card"
            checked={ this.state.paymentMethod === "credit-card"  }
            imageURL={ creditCardURL }
            onChange={ this.changePaymentMethod } />
            
          { this.renderCreditCardFields() }

          <RadioButton 
            label="Paypal" 
            value="paypal"
            checked={ this.state.paymentMethod === "paypal"  }
            imageURL={ paypalURL }
            onChange={ this.changePaymentMethod } />
          </RadioButtons>

        <Button 
          label="Continue"
          state="primary"
          onClick={ this.submitPaymentDetails } />
        </div>
    );
  }

  renderCreditCardFields = () => {
    if( this.state.showCreditCardFields ) {
      return(
        <CreditCardFields>
          <CreditCardFieldsContent>
            <CreditCardField 
              type="Number"
              label="Card number"
              placeholder="1234 1234 1234 1234" />
            
            <CreditCardFlexFieldArea
              gap="4%"
              columnWidths="48% 48%">
              <Field 
                type="Number"
                label="Expiry Date" 
                placeholder="MM / YY" />
              <GridRow
                gap="4%"
                columnWidths="67% 29%">
                <Field 
                  type="Number"
                  label="Security Code" 
                  placeholder="111" />
                <CVVImage src={ cvvURL } alt="Back of the card where you find the Security Code" />
              </GridRow>
            </CreditCardFlexFieldArea>

            <CreditCardField 
              type="Text" 
              label="Cardholder name" 
              description="Enter your name as it’s written on the card" />
          </CreditCardFieldsContent>


        </CreditCardFields>
      );
    }
  }

  renderPaymentMethodSummary = () => {
    return(
      <div>
        PaymentMethodSummary        
      </div>
    );
  }

  renderPaymentButton = () => {
    switch( this.state.paymentMethod ) {
      case "apple-pay":
        return (
          <Button 
            label={ (<img src={ applePayURL } alt="Close" />) }
            state="apple-disabled"
            width="100%"
            type="apple-pay" />
        )
      case "paypal":
        return (
          <Button 
            label={ (<img src={ paypalURL } alt="Close" />) }
            state="paypal-disabled"
            width="100%"
            type="paypal" />
        )
      default:
        return (
          <Button 
            label="Pay $60"
            state="disabled"
            width="100%"
            type="credit-card" />
        )
    }
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
              completedTitle="Payment method"
              status={ this.state.paymentStatus }
              content={ this.renderPaymentMethod() }
              summary={ this.renderPaymentMethodSummary() } />

            <Step
              number="2"
              title="Enter your billing details"
              completedTitle="Billing details"
              status={ this.state.billingStatus }
              content={ this.renderBilling() }
              summary={ this.renderBillingSummary() } />

            <Step
              number="3"
              title="Review your order"
              status={ this.state.reviewStatus }
              borderWidth={ 0 } 
              content={ this.renderReview() }
              summary={ this.renderReviewSummary() } />

          </LeftColumn>
          <RightColumn>
            { this.renderPaymentButton() }
            <InstructionalCopy>{ this.state.instructionalCopy }</InstructionalCopy>
          </RightColumn>
        </Container>
      </div>
    );
  }
}
