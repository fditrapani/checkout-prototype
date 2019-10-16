//External
import React from 'react';
import styled from 'styled-components';

//Componenets
import Step from './components/Step';
import Button from './components/Button';
import RadioButton from './components/RadioButton';
import Field from './components/Field';
import GridRow from './components/GridRow';
import FlexRow from './components/FlexRow';
import ErrorMessage from './components/ErrorMessage';
import CloseIcon from './components/CloseIcon';
import LockIcon from './components/LockIcon';
import LocationIcon from './components/LocationIcon';
import Modal from './components/Modal';
import VisaLogo from './components/VisaLogo';
import DeleteIcon from './components/DeleteIcon';
import Coupon from './components/Coupon';

//CSS
import { colours } from './config/colours.js';
import { breakpoints } from './config/breakpoints.js';

//Images
import logoURL from './images/wp-logo.svg';
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

const FormField = styled(Field)`
  margin-top: 16px;

  :first-child {
    margin-top: 0;
  }
`

const FormFieldGrid = styled(GridRow)`
  margin-top: 16px;
`

const CVVImage = styled.img`
  margin-top: 36%;
`

const SummaryDetails = styled.span`
  margin-right: 8px;
`

const SummaryImage = styled.span`
  margin-right: 8px;
  transform: translateY(2px);
  display: inline-block;
`

const BillingFormFields = styled.div`
  margin-bottom: 16px;
`;

const ExtendedBillingFieldsUI = styled.div`
  overflow: ${ props => props.overflow };
  height: ${ props => props.height };
`;

const DomainRegistrationUI = styled.div`
  margin: 16px 0 24px;
  display: flex;
  width: 100%;
`;

const DomainRegistrationLabelUI = styled.label`
  font-size: 14px;
  color: ${ colours.gray80 };
  display: block;
  position: relative;
  padding-left: 5px;

  :hover {
    cursor: pointer
  }

  :before {
    display: block;
    width: 16px;
    height: 16px;
    content: "";
    position: absolute;
    left: -20px;
    top: 0;
    border: 1px solid ${ colours.gray20 };
    border-radius: 3px;
  }
`;

const DomainRegistrationCheckboxUI = styled.input`
  margin-right: 5px;
  opacity: 0;
  
  :checked + label:before {
    background: ${ colours.highlight };
  }

  :checked + label:after {
    display: block;
    width: 4px;
    height: 8px;
    content: "";
    position: absolute;
    left: -14px;
    top: 3px;
    border-right: 2px solid ${ colours.white };
    border-bottom: 2px solid ${ colours.white };
    transform: rotate(45deg);
  }

  :focus + label:before {
    outline: auto;
  }
`;

const ReviewSummaryProductsUI = styled.div`
  margin-bottom: 16px;
  margin-right: ${ props => props.marginRight };
`;

const ReviewSummaryCartUI = styled.div`
  margin-right: ${ props => props.marginRight };
`

const ReviewSummaryLineItemUI = styled(FlexRow)`
  margin-bottom: 4px;
  font-weight: ${ props => props.fontWeight };
  font-size: ${ props => props.fontSize };
  color: ${ props => props.color };
  padding: ${ props => props.padding };
  border-bottom: ${ props => props.borderWidth } solid ${ colours.gray5 };
  position: relative;

  :first-child {
    border-top: ${ props => props.borderWidth } solid ${ colours.gray5 }
  }
`;

const ReviewSummaryProductNameUI = styled.span`
  padding-right: 8px;
`

const ReviewSummaryPriceUI = styled.span`
  text-align: right;
  font-size: ${ props => props.fontSize };
  flex-basis: content;
`;

const ReviewSummaryDeleteButtonUI = styled(Button)`
  position: absolute;
  right: -50px;
  top: 11px;  
  border: 0;
  box-shadow: none;
  padding: 10px;

  :hover {
    background: none;
    border: 0;
    box-shadow: none;
  }

  :hover svg rect {
    fill: ${ colours.red50}
  }

  :active {
    background: none;
    border: 0;
    box-shadow: none;
  }
`

const StrikeThrough = styled.span`
  text-decoration: line-through;
`;

const AddCouponButtonUI = styled(Button)`
  display: inline-block;
  margin-left: 10px;
  opacity: ${ props => props.opacity };

  :hover{
    cursor: ${ props => props.cursor };  
  }  
`;

const ProductNameUI = styled.span`
  font-size: ${ props => props.fontSize };
`

const SummaryQualifier = styled.span`
  color: ${ colours.green50 };
  font-size: 14px;
`

const TermsWrapperUI = styled.div`
  margin: 24px 50px 0 0;
  background: ${ colours.gray0 };
  padding: 24px;
`

const TermsParagraphUI = styled.p`
  margin: 16px 0 0;
  font-size: 14px;
  color: ${ colours.gray80 }

  a {
    color: ${ colours.gray80 }
  }

  a:hover {
    text-decoration: none;
  }

  a:active {
    text-decoration: underline;
  }
`

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
      billingCity: "",
      billingCityError: false,
      billingState: "",
      billingStateError: false,
      billingZip: "",
      billingZipError: false,
      billingCountry: "",
      billingCountryError: false,
      billingPhoneNumber: "",
      billingErrorVisibility: false,
      billingErrorMessage: "",
      showExtendedBillingFields: true,
      billingLocatorVisibility: true,
      productsInCart: [
        {
          name: "WordPress.com Personal Plan",
          id: "plan-product",
          price: 60,
          type: "plan",
          duration: {
            1: {
              label: "One year",
              price: 60,
            },
            2: {
              label: "Two year",
              price: 120,
              discount: 10
            }
          }
        },
        {
          name: "yourdomain.tld",
          id: "domain-product",
          price: 17,
          discount: "0",
          qualifier: "Free for one year!",
          type: "domain",
        }
      ],
      cartSummary: [
        {
          name: "Total",
          price: 60,
          isTotal: true,
          id: "total",
        }
      ],
      modalIsVisible: false,
      modalTitle: "You are about to leave your checkout session",
      modalCopy: "When you press Continue, we will take you back to your site and save your cart so you can complete your purchase later.",
      modalprimaryAction: this.closeApp,
      isCouponVisible: false,
    };
  }

  showSectionBasedOnUrl = () => {
    const section = window.location.hash ? window.location.hash : "#paymentMethod";
    this.prevSection = section;
    switch (section) { // eslint-disable-line default-case
      case '#paymentMethod':
        this.editPaymentDetails();
        break;
      case '#billingDetails':
        this.editBillingDetails();
        break;
      case '#reviewOrder':
        this.setState({ paymentStatus: 'completed', billingStatus: 'completed', reviewStatus: 'content' });
        break;
    }
  }

  saveSectionInUrl = () => {
    const getActiveSection = () => {
      if (this.state.paymentStatus === 'content') {
        return '#paymentMethod';
      }
      if (this.state.billingStatus === 'content') {
        return '#billingDetails';
      }
      if (this.state.reviewStatus === 'content') {
        return '#reviewOrder';
      }
    };
    const section = getActiveSection();
    if (section) {
      window.history.pushState(undefined, undefined, section);
    }
  }

  componentDidMount = () => {
    window.addEventListener( 'hashchange', this.showSectionBasedOnUrl, false );
  }

  componentWillUnmount = () => {
    window.removeEventListener( 'hashchange', this.showSectionBasedOnUrl, false );
  }

  componentDidUpdate = () => {
    this.saveSectionInUrl();
  }

  changePaymentMethod = ( changeEvent ) => {
    let instructionalCopy = "Continue to enter your billing information";
    let showCreditCardFields = false;
    let paymentSummary = this.state.paymentSummary;
    let paymentButtonStatus = this.state.paymentButtonStatus;
    
    if( changeEvent.target.value === "credit-card" ) {
      instructionalCopy = "Enter your credit card details to continue";
      showCreditCardFields = true;
      paymentSummary = "Creidt Card";

      if(this.state.paymentButtonStatus === "primary" && this.state.creditCardNumber === "") {
        paymentButtonStatus =  "disabled";
      }
    }

    if( changeEvent.target.value === "paypal" ) {
      paymentSummary = "Paypal";

      if( this.state.billingSummary ) {
        paymentButtonStatus =  "primary";
      }
    }

    if( changeEvent.target.value === "apple-pay" ) {
      paymentSummary = "Apple Pay";

      if( this.state.billingSummary ) {
        paymentButtonStatus =  "primary";
      }
    }

    this.setState({ 
      paymentMethod: changeEvent.target.value,
      instructionalCopy: instructionalCopy,
      showCreditCardFields: showCreditCardFields,
      paymentSummary: paymentSummary,
      paymentButtonStatus: paymentButtonStatus,
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
          <SummaryImage>
            <VisaLogo />
          </SummaryImage>  
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
          state={ this.state.paymentButtonStatus === "disabled" ? "primary" : "secondary" }
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
            
            <FormFieldGrid
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
            </FormFieldGrid>

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
            state={ "apple--" + this.state.paymentButtonStatus }
            width="100%"
            type="apple-pay"
            onClick={ this.clickPaymentButton } />
        )
      case "paypal":
        return (
          <Button 
            label={ (<img src={ paypalURL } alt="Close" />) }
            state={ "paypal--" + this.state.paymentButtonStatus }
            width="100%"
            type="paypal"
            onClick={ this.clickPaymentButton } />
        )
      default:
        return (
          <Button 
            label="Pay $60"
            state={ this.state.paymentButtonStatus }
            width="100%"
            type="credit-card"
            onClick={ this.clickPaymentButton } />
        )
    }
  }

  clickPaymentButton = () => {
    if( this.state.paymentButtonStatus != "disabled" ){
      alert("Thank you! Come again");
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
                /*icon={ <LocationIcon /> }
                iconAction={ this.returnLocationAddress }
                isIconVisible={ this.state.billingLocatorVisibility }
                placeholder="Find your address"*/
                error={ this.state.billingAddressError }
                errorMessage="This is a required field"
                placeholder=""
                value={ this.state.billingAddress }
                onChange={ this.checkForFieldErrors } />

          { this.renderBillingFields() }

          <FormField 
                id="billingPhoneNumber"
                type="Number"
                label="Phone number (Optional)"
                value={ this.state.billingPhoneNumber }
                placeholder="(555) 555-5555"
                onChange={ this.checkForFieldErrors } />          
        </BillingFormFields>   

        <DomainRegistrationUI>
          <DomainRegistrationCheckboxUI type="checkbox" id="domain-registration" name="domain-registration" defaultChecked={ true }/>
          <DomainRegistrationLabelUI htmlFor="domain-registration">
            Use your billing details for your domain registration contact information.
          </DomainRegistrationLabelUI>   
        </DomainRegistrationUI>

        <Button 
          state={ this.state.paymentButtonStatus === "disabled" ? "primary" : "secondary" }
          label={ this.state.billingSummary ? "Update" : "Continue" } 
          onClick={ this.submitBillingDetails } />
      </div>

    );
  }

  renderBillingFields = () => {
    return(
      <ExtendedBillingFieldsUI height={ this.state.showExtendedBillingFields ? 1 : 0 } overflow={ this.state.showExtendedBillingFields ? "auto" : "hidden" }>
        <FormFieldGrid gap="4%"
                columnWidths="48% 48%">
          <Field 
                id="billingCity"
                type="Text"
                label="City"
                error={ this.state.billingCityError }
                errorMessage="This is a required field"
                value={ this.state.billingCity }
                onChange={ this.checkBillingFields } 
                tabIndex={ this.state.showExtendedBillingFields ? "" : "-1" } />
          <Field 
                id="billingState"
                type="Text"
                label="State"
                error={ this.state.billingStateError }
                errorMessage="This is a required field"
                value={ this.state.billingState }
                onChange={ this.checkBillingFields } 
                tabIndex={ this.state.showExtendedBillingFields ? "" : "-1" } />
        </FormFieldGrid>
        <FormFieldGrid gap="4%"
                columnWidths="48% 48%">
          <Field 
                id="billingZip"
                type="Text"
                label="Zip Code"
                error={ this.state.billingZipError }
                errorMessage="This is a required field"
                value={ this.state.billingZip }
                onChange={ this.checkBillingFields } 
                tabIndex={ this.state.showExtendedBillingFields ? "" : "-1" } />
          <Field 
                id="billingCountry"
                type="Text"
                label="Country"
                error={ this.state.billingCountryError }
                errorMessage="This is a required field"
                value={ this.state.billingCountry }
                onChange={ this.checkBillingFields } 
                tabIndex={ this.state.showExtendedBillingFields ? "" : "-1" } />
        </FormFieldGrid>
      </ExtendedBillingFieldsUI>
    )
  };

  checkBillingFields = ( e ) => {
    if( e.value.length > 0 ) {
      this.setState({
        showExtendedBillingFields: true,
      })
    }

    this.checkForFieldErrors( e );
  }

  returnLocationAddress = () => {
    let self = this; 

    navigator.geolocation.getCurrentPosition(function(position) {
      self.setState({
        showExtendedBillingFields: true,
        billingAddress: "906 Sandy Forest Place",
        billingCity: "Beverly hills",
        billingState: "CA",
        billingZip: "90210",
        billingCountry: "United States",
        billingLocatorVisibility: false,
      })
    });

    //display fields and populate them
  }

  submitBillingDetails = () => {
    let billingErrorVisibility = false;
    let billingErrorMessage = "";
    let billingNameError = false;
    let billingAddressError = false;
    let billingCityError = false;
    let billingStateError = false;
    let billingZipError = false;
    let billingCountryError = false;
    let billingSummary = this.state.billingSummary;
    let cartSummary = this.state.cartSummary;

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

      if( ! this.state.showExtendedBillingFields ) { 
        return;
      }
    }

    if( this.state.showExtendedBillingFields ) {
      if ( ! this.state.billingCity ||  ! this.state.billingState ||  ! this.state.billingZip ||  ! this.state.billingCountry ) {
        billingErrorMessage = "We need all the fields to be completed. Please fill out the highlighted fields and continue.";
        billingErrorVisibility = true;
        
        if( ! this.state.billingCity ) {
          billingCityError = true;
        }

        if( ! this.state.billingState ) {
          billingStateError = true;
        }

        if( ! this.state.billingZip ) {
          billingZipError = true;
        }

        if( ! this.state.billingCountry ) {
          billingCountryError = true;
        }

        this.setState({ 
          billingAddressError: billingAddressError,
          billingNameError: billingNameError,
          billingStateError: billingStateError,
          billingCityError: billingCityError,
          billingZipError: billingZipError,
          billingCountryError: billingCountryError,
          billingErrorVisibility: billingErrorVisibility,
          billingErrorMessage: billingErrorMessage,
          cartSummary: cartSummary,
        });

        return;
      }
    }

    //UPDATE SUMMARY
    billingSummary = (
      <div>
        <div>          
          { this.state.paymentMethod === "credit-card" ? "" : this.state.billingName } { this.state.paymentMethod !== "credit-card" && <br/> }
          { this.state.billingAddress } <br/>
          { this.state.billingCity }, { this.state.billingState } <br/>
          { this.state.billingZip } { this.state.billingCountry } 
          { this.state.billingPhoneNumber && <br/> } { this.state.billingPhoneNumber && <br/> }
          { this.state.billingPhoneNumber && "(" }{ this.state.billingPhoneNumber.slice(0,3) }{ this.state.billingPhoneNumber && ") " } 
          { this.state.billingPhoneNumber.slice(3,6) }{ this.state.billingPhoneNumber && "-" }{ this.state.billingPhoneNumber.slice(6) }
        </div>        
      </div>
    );

    //Update Cart
    if( ! this.state.taxesAdded ) {
      cartSummary.push({
        name: "Taxes",
        price: "5.15",
        isTotal: false,
        id: "taxes",
      })

      cartSummary[0].price += 5.15;
    }

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
      taxesAdded: true,
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

  renderCart = ( isFullView ) => {
    const products = this.state.productsInCart;
    const cart = this.state.cartSummary;

    return(
      <div>
        <ReviewSummaryProductsUI marginRight={ isFullView ? "50px" : "0" } >
          { Object.values( products ).map( ( key ) => (
              <ReviewSummaryLineItemUI 
                key={ key.id }
                padding={ isFullView ? "24px 0" : "0" }
                borderWidth={ isFullView ? "1px" : "0" } >
                  <ReviewSummaryProductNameUI>
                    { key.name } { isFullView && (<SummaryQualifier>{key.qualifier} </SummaryQualifier>) }
                  </ReviewSummaryProductNameUI>
                  
                  { key.discount ? 
                    ( <ReviewSummaryPriceUI>
                        <StrikeThrough>${ key.price }</StrikeThrough>&nbsp;{ key.discount } 
                      </ReviewSummaryPriceUI>
                    ) :
                    ( 
                      <ReviewSummaryPriceUI>
                        { key.type === "coupon" && "-"}${ key.price }
                      </ReviewSummaryPriceUI> 
                    )
                  }

                  { isFullView && <ReviewSummaryDeleteButtonUI label={ <DeleteIcon state="borderless" /> } /> }
              </ReviewSummaryLineItemUI>
            ) ) }
        </ReviewSummaryProductsUI>

        <ReviewSummaryCartUI marginRight={ isFullView ? "50px" : "0" } >
          {/*CART VIEW==============================================*/}
          { Object.values( cart ).slice(0).reverse().map( ( key ) => (
              <ReviewSummaryLineItemUI 
                key={ key.id }
                fontWeight={ key.isTotal ? "600" : "400"  } 
                fontSize={ key.isTotal ? "16px" : isFullView ? "16px" : "14px" } 
                color={ key.isTotal ? colours.black : isFullView ? colours.gray80 : colours.gray50 } 
                borderWidth="0">
                  
                  <ReviewSummaryProductNameUI>
                      <ProductNameUI fontSize={ key.isTotal && isFullView ? "20px" : "inhert" }>
                        { key.name }
                      </ProductNameUI> 

                      { ( key.isTotal && ! this.state.isCouponUsed ) && 
                        <AddCouponButtonUI 
                          label="Add coupon" 
                          state="text-button" 
                          opacity={ this.state.isCouponVisible ? 0 : 1 } 
                          cursor={ this.state.isCouponVisible ? "default" : "pointer" } 
                          onClick={ this.showSummaryCouponField } /> }  
                  </ReviewSummaryProductNameUI>
                
                  <ReviewSummaryPriceUI fontSize={ key.isTotal && isFullView ? "20px" : "inhert" }>
                    ${ key.price }
                  </ReviewSummaryPriceUI> 

              </ReviewSummaryLineItemUI>
            ) ) }
          </ReviewSummaryCartUI>

          { this.renderCouponField( isFullView ) }

          { this.renderTerms( isFullView ) }
      </div>
    )
  }

  showSummaryCouponField = () => {
    this.setState({
      isCouponVisible: true
    });
  }

  renderCouponField = ( isFullView ) => {
    if( this.state.isCouponVisible ){
      return <Coupon applyCoupon={ this.applyCoupon } isFullView={ isFullView } />
    }

    return false;
  }

  applyCoupon = ( fieldValue ) => {
    let productsArray = this.state.productsInCart;
    let total = this.state.cartSummary;

    productsArray.push({
      name: "Coupon: " + fieldValue.toUpperCase(),
      id: "coupon-product",
      price: 20,
      type: "coupon",
    })

    total[0].price === 65.15 ? 
      total[0].price = (total[0].price - 20).toFixed(2) :
      total[0].price = total[0].price -= 20;

    this.setState({
      isCouponVisible: false,
      isCouponUsed: true,
    })
  }

  renderTerms = ( isFullView ) => {
    if ( isFullView ) {
      return (
        <TermsWrapperUI>
          { this.renderPaymentButton() }

          <TermsParagraphUI>
            <strong>By checking out:</strong> you agree to our <a href="#" onClick={ this.fakeClick } >Terms of Service</a> and authorize your payment method to be charged on a recurring basis until you cancel, which you can do at any time. You understand <a href="#" onClick={ this.fakeClick } >how your subscription works</a> and <a href="#" onClick={ this.fakeClick } >how to cancel</a>.
          </TermsParagraphUI>
          <TermsParagraphUI>
            You agree to the <a href="#" onClick={ this.fakeClick } >Domain Registration Agreement</a> for domainname.com.
          </TermsParagraphUI>
          <TermsParagraphUI>
            You understand that <a href="#" onClick={ this.fakeClick } >domain name refunds</a> are limited to 96 hours after registration. Refunds of paid plans will deduct the standard cost of any domain name registered within a plan.
          </TermsParagraphUI>
        </TermsWrapperUI>
      )
    }

    return null
  }

  fakeClick = (e) => {
    e.preventDefault();

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
    alert("Bye!");
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
          <TransparentButton onClick={ this.initiateCloseApp } tabIndex="1 " >
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
              content={ this.renderCart( true ) }
              summary={ this.renderCart( false ) } />

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
