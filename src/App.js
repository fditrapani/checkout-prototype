//External
import React from 'react';
import styled from 'styled-components';

//Componenets
import Step from './components/Step';
import Button from './components/Button';
import RadioButton from './components/RadioButton';
import Field from './components/Field';
import GridRow from './components/GridRow';
import ErrorMessage from './components/ErrorMessage';
import CloseIcon from './components/CloseIcon';
import LockIcon from './components/LockIcon';
import LocationIcon from './components/LocationIcon';
import Modal from './components/Modal';

//CSS
import { colours } from './config/colours.js';
import { breakpoints } from './config/breakpoints.js';

//Images
import logoURL from './images/wp-logo.svg';
import applePayURL from './images/apple-pay.svg';
import paypalURL from './images/paypal.svg';
import creditCardURL from './images/credit-cards.svg';
import cvvURL from './images/cvv.svg';
import visaURL from './images/visa.svg';

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

const FormField = styled(Field)`
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

const SummaryDetails = styled.span`
  margin-right: 8px;
`

const SummaryImage = styled.img`
  margin-right: 8px;
  transform: translateY(1px);
`

const BillingFormFields = styled.div`
  margin-bottom: 16px;
`;

// END CSS
//////////////////////////////////////

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      paymentMethod: "apple-pay",
      paymentButtonStatus: "disabled",
      instructionalCopy: "Confirm your payment method to continue",
      showCreditCardFields: false,
      previousSection: null,
      currentSection: "payment",
      paymentStatus: "content",
      billingStatus: "none",
      reviewStatus: "summary",
      paymentSummary: "Apple Pay",
      creditCardNumber: "",
      expiryDate: "",
      securityCode: "",
      cardholderName: "",
      creditCardNumberError: false,
      expiryDateError: false,
      securityCodeError: false,
      cardholderNameError: false,
      paymentErrorVisibility: false,
      payMentErrorMessage: "",
      billingSummary: null,
      billingName: "",
      billingNameError: false,
      billingAddress: "",
      billingAddressError: false,
      billingPhoneNumber: "",
      billingErrorVisibility: false,
      billingErrorMessage: "",
      reviewSummary: "Review Summary",
      modalIsVisible: false,
      modalTitle: "You are about to leave your checkout session",
      modalCopy: "When you press Continue, we will take you back to your site and save your cart so you can complete your purchase later.",
      modalprimaryAction: this.closeApp,
    };
  }

  changePaymentMethod = ( changeEvent ) => {
    let instructionalCopy = "Continue to enter your billing information";
    let showCreditCardFields = false;
    let paymentSummary = this.state.paymentSummary;
    
    if( changeEvent.target.value === "credit-card" ) {
      instructionalCopy = "Enter your credit card details to continue";
      showCreditCardFields = true;
      paymentSummary = "Creidt Card";

      if(this.state.paymentButtonStatus === "primary" && this.state.creditCardNumber === "") {
        this.setState({ 
          paymentButtonStatus: "disabled",
        });
      }
    }

    if( changeEvent.target.value === "paypal" ) {
      paymentSummary = "Paypal";
    }

    if( changeEvent.target.value === "apple-pay" ) {
      paymentSummary = "Apple Pay";
    }

    this.setState({ 
      paymentMethod: changeEvent.target.value,
      instructionalCopy: instructionalCopy,
      showCreditCardFields: showCreditCardFields,
      paymentSummary: paymentSummary,
    });
  }

  submitPaymentDetails = () => {
    let paymentErrorVisibility = false;
    let payMentErrorMessage = "";
    let creditCardNumberError = false;
    let expiryDateError = false;
    let securityCodeError = false;
    let cardholderNameError = false;
    let billingStatus = "content";
    let reviewStatus = "summary";
    let paymentButtonStatus = this.state.paymentButtonStatus;
    let paymentSummary = this.state.paymentSummary;

    //NOT FILLED OUT > THROW ERROR
    if( this.state.paymentMethod === "credit-card" && ( ! this.state.creditCardNumber ||  ! this.state.expiryDate || ! this.state.securityCode || ! this.state.cardholderName ) ){
      payMentErrorMessage = "We need all the fields to be completed. Please fill out the highlighted fields and continue.";
      paymentErrorVisibility = true;
      
      if( ! this.state.creditCardNumber ) {
        creditCardNumberError = true;
      }

      if( ! this.state.expiryDate ) {
        expiryDateError = true;
      }

      if( ! this.state.securityCode ) {
        securityCodeError = true;
      }

      if( ! this.state.cardholderName ) {
        cardholderNameError = true;
      }

      this.setState({ 
        creditCardNumberError: creditCardNumberError,
        expiryDateError: expiryDateError,
        securityCodeError: securityCodeError,
        cardholderNameError: cardholderNameError,
        paymentErrorVisibility: paymentErrorVisibility,
        payMentErrorMessage: payMentErrorMessage,
      });

      return;
    }

    //UPDATE SUMMARY
    if( this.state.paymentMethod === "credit-card"  ) {
      paymentSummary = (
        <div>
          <div>{ this.state.cardholderName }</div>
          <SummaryImage src={ visaURL } alt="VISA" /> 
          <SummaryDetails>**** { this.state.creditCardNumber.slice( - 4) }</SummaryDetails>
          <SummaryDetails>Exp: { this.state.expiryDate.slice(0,2) + "/" + this.state.expiryDate.slice(2) }</SummaryDetails>
        </div>
      );
    }

    if( this.state.billingStatus === "completed" ) {
      billingStatus = "completed";
      reviewStatus = "content";
      paymentButtonStatus = "primary";
    }

    //UPDATE STATE
    this.setState({
      paymentErrorVisibility: paymentErrorVisibility,
      paymentStatus: "completed",
      billingStatus: billingStatus,
      reviewStatus: reviewStatus,
      creditCardNumberError: false,
      expiryDateError: false,
      securityCodeError: false,
      cardholderNameError: false,
      billingName: this.state.billingName ? this.state.billingName : this.state.cardholderName,
      instructionalCopy: "Enter your billing details to continue",
      paymentSummary: paymentSummary,
      paymentButtonStatus: paymentButtonStatus,
    });
  }

  editPaymentDetails = () => {
    this.setState({ 
      paymentStatus: "content",
      billingStatus: ( this.state.billingStatus === "completed" || this.state.billingSummary ) ? "completed" : "none",
      reviewStatus: "summary",
      instructionalCopy: "Edit your payment details",
    });
  }

  editBillingDetails = () => {
    this.setState({ 
      paymentStatus: "completed",
      reviewStatus: "summary",
      billingStatus: "content",
      instructionalCopy: "Edit your payment details",
    });
  }
  
  renderPaymentMethod = () => {
    let buttonCopy = this.state.paymentSummary ? "Update" : "Continue";

    if( this.state.billingSummary ) {
      buttonCopy = "Update and review your order"
    }

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
          label={ buttonCopy }
          state={ this.state.paymentButtonStatus == "disabled" ? "primary" : "secondary" }
          onClick={ this.submitPaymentDetails } />
        </div>
    );
  }

  renderCreditCardFields = () => {
    if( this.state.showCreditCardFields ) {
      return(
        <CreditCardFields>
          <CreditCardFieldsContent>
            { this.renderCreditCardErrorMessage() }

            <FormField 
              id="creditCardNumber"
              type="Number"
              label="Card number"
              placeholder="1234 1234 1234 1234"
              value={ this.state.creditCardNumber }
              icon={ <LockIcon /> }
              onChange={ this.checkForFieldErrors }
              error={ this.state.creditCardNumberError }
              errorMessage="This is a required field" />
            
            <CreditCardFlexFieldArea
              gap="4%"
              columnWidths="48% 48%">
              <Field
                id="expiryDate" 
                type="Number"
                label="Expiry Date" 
                placeholder="MM / YY"
                value={ this.state.expiryDate }
                onChange={ this.checkForFieldErrors }
                error={ this.state.expiryDateError }
                errorMessage="This is a required field" />
              <GridRow
                gap="4%"
                columnWidths="67% 29%">
                <Field 
                  id="securityCode"
                  type="Number"
                  label="Security Code" 
                  placeholder="111"
                  value={ this.state.securityCode }
                  onChange={ this.checkForFieldErrors }
                  error={ this.state.securityCodeError }
                  errorMessage="This is a required field" />
                <CVVImage src={ cvvURL } alt="Back of the card where you find the Security Code" />
              </GridRow>
            </CreditCardFlexFieldArea>

            <FormField 
              id="cardholderName"
              type="Text" 
              label="Cardholder name" 
              description="Enter your name as it’s written on the card"
              onChange={ this.checkForFieldErrors }
              error={ this.state.cardholderNameError }
              value={ this.state.cardholderName }
              errorMessage="This is a required field" />
          </CreditCardFieldsContent>
        </CreditCardFields>
      );
    }
  }

  checkForFieldErrors = ( e ) => {
    let errorStatus = true;

    if( e.value.length > 0 ) {
      errorStatus = false;
    }

    this.setState({ 
      [e.id]: e.value,
      [e.id + "Error"]: errorStatus,
    });
  }

  renderCreditCardErrorMessage = () => {
    return this.state.paymentErrorVisibility ? (<ErrorMessage message={ this.state.payMentErrorMessage } />) : null;
  }

  renderBillingErrorMessage = () => {
    return this.state.billingErrorVisibility ? (<ErrorMessage message={ this.state.billingErrorMessage } />) : null;
  }

  renderPaymentMethodSummary = () => {
    if( this.state.paymentSummary) {
      return(
        <div>
          { this.state.paymentSummary }        
        </div>
      )
    }

    return null;
  }

  renderPaymentButton = () => {
    switch( this.state.paymentMethod ) {
      case "apple-pay":
        return (
          <Button 
            label={ (<img src={ applePayURL } alt="Close" />) }
            state={ "apple-" + this.state.paymentButtonStatus }
            width="100%"
            type="apple-pay" />
        )
      case "paypal":
        return (
          <Button 
            label={ (<img src={ paypalURL } alt="Close" />) }
            state={ "paypal-" + this.state.paymentButtonStatus }
            width="100%"
            type="paypal" />
        )
      default:
        return (
          <Button 
            label="Pay $60"
            state={ this.state.paymentButtonStatus }
            width="100%"
            type="credit-card" />
        )
    }
  }

  renderBilling = () => {
    return(
      <div>
        <BillingFormFields>
          { this.renderBillingErrorMessage() }
          <FormField 
                id="billingName"
                type="Text"
                label="Name"
                error={ this.state.billingNameError }
                errorMessage="This is a required field"
                value={ this.state.billingName }
                onChange={ this.checkForFieldErrors } />
          <FormField 
                id="billingAddress"
                type="Text"
                label="Address"
                icon={ <LocationIcon /> }
                //ICONCLICKABLE
                //ICONACTION
                error={ this.state.billingAddressError }
                errorMessage="This is a required field"
                placeholder="Find your address"
                value={ this.state.billingAddress }
                onChange={ this.checkForFieldErrors } />
          <FormField 
                id="billingPhoneNumber"
                type="Number"
                label="Phone number (Optional)"
                value={ this.state.billingPhoneNumber }
                onChange={ this.checkForFieldErrors } />
          
        </BillingFormFields>       

        <Button 
          state={ this.state.paymentButtonStatus == "disabled" ? "primary" : "secondary" }
          label={ this.state.billingSummary ? "Update" : "Continue" } 
          onClick={ this.submitBillingDetails } />
      </div>

    );
  }

  submitBillingDetails = () => {
    let billingErrorVisibility = false;
    let billingErrorMessage = "";
    let billingNameError = false;
    let billingAddressError = false;
    let billingSummary = this.state.billingSummary;

    //NOT FILLED OUT > THROW ERROR
    if( ! this.state.billingAddress ||  ! this.state.billingName ){
      billingErrorMessage = "We need all the fields to be completed. Please fill out the highlighted fields and continue.";
      billingErrorVisibility = true;
      
      if( ! this.state.billingName) {
        billingNameError = true;
      }

      if( ! this.state.billingAddress ) {
        billingAddressError = true;
      }

      this.setState({ 
        billingAddressError: billingAddressError,
        billingNameError: billingNameError,
        billingErrorVisibility: billingErrorVisibility,
        billingErrorMessage: billingErrorMessage,
      });

      return;
    }

    //UPDATE SUMMARY
    billingSummary = (
      <div>
        <div>
          { this.state.billingName } <br/>
          { this.state.billingAddress }
        </div>
        
      </div>
    );


    //UPDATE STATE
    this.setState({
      billingErrorVisibility: billingErrorVisibility,
      billingStatus: "completed",
      reviewStatus: "content",
      billingNameError: false,
      billingAddressError: false,
      instructionalCopy: "Review your order and pay",
      paymentButtonStatus: "primary",
      billingSummary: billingSummary,
    });
  }

  renderBillingSummary = () => {
    if( this.state.billingSummary ) {
      return(
        <div>
          { this.state.billingSummary }        
        </div>
      )
    }

    return null;
  }  

  renderReview = () => {
    return(
      <span>Review</span>
    );
  }

  renderReviewSummary = () => {
    if( this.state.reviewSummary ) {
      return(
        <div>
          { this.state.reviewSummary }        
        </div>
      )
    }

    return null;
  }

  initiateCloseApp = () => {
    this.setState({ 
      modalTitle: "You are about to leave your checkout session",
      modalCopy: "When you press Continue, we will take you back to your site and save your cart so you can complete your purchase later.",
      modalprimaryAction: this.closeApp,
      modalIsVisible: true,
    });
  }

  closeApp = () => {
    alert("Bye!")
  }

  closeModal = () => {
    this.setState({ 
      modalIsVisible: false
    });
  }

  render() { 
    return (
      <div>
        <Modal 
          isVisible={ this.state.modalIsVisible } 
          closeModal={ this.closeModal }
          title={ this.state.modalTitle }
          copy={ this.state.modalCopy } 
          primaryAction={ this.state.modalprimaryAction } />

        <Header>
          <TransparentButton onClick={ this.initiateCloseApp } >
            <CloseIcon />
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
              summary={ this.renderPaymentMethodSummary() }
              onEditButtonPress={ this.editPaymentDetails } />

            <Step
              number="2"
              title="Enter your billing details"
              completedTitle="Billing details"
              status={ this.state.billingStatus }
              content={ this.renderBilling() }
              onEditButtonPress={ this.editBillingDetails }
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
