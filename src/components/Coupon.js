import React from 'react';
import styled from 'styled-components';
import Field from './Field';
import Button from './Button';

const CouponUI = styled.div`
  margin: ${ props => props.marginTop } 0 0 0;
  padding-top: 0;
  position: relative;
  width: 100%;
`

const ApplyButtonUI = styled(Button)`
  position: absolute;
  bottom: 6px;
  right: 4px;
  padding: 7px;
`

export default class Coupon extends React.Component {
  constructor() {
    super();

    this.state = {
      buttonIsActive: false,
      fieldValue: "",
    }
  }

  componentDidMount(){
    document.addEventListener("keydown", this.returnFunction, false);
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.returnFunction, false);
  }

 returnFunction = (event) => {
    if( event.keyCode === 13 && this.state.buttonIsActive) {
      this.submitCoupon();
    }
  }

  submitCoupon = () => {
    this.props.applyCoupon( this.state.fieldValue );
  }

  checkFieldInput = (e) => {
    if( e.value.length > 0 ){
      this.setState({
        buttonIsActive: true,
        fieldValue: e.value,
      });

      return;
    }

    this.setState({
      buttonIsActive: false,
    });
  }

  render() {
    return (
      <CouponUI marginRight={ this.props.isFullView ? "50px" : "0" } marginTop={ this.props.isFullView ? "0" : "16px" }>
          <Field label={ this.props.label } placeholder="Enter your coupon code" onChange={ this.checkFieldInput } />
          { (this.state.buttonIsActive) && (
            <ApplyButtonUI 
              label="Apply" 
              state={ (this.state.buttonIsActive) ? "secondary"  : "disabled" }
              onClick={ ()=> (this.state.buttonIsActive) ? this.submitCoupon() : null } />)}
      </CouponUI>
    );
   }
}
