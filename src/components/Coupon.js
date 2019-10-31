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
  top: 5px;
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
      <CouponUI marginRight={ this.props.isFullView ? "50px" : "0" } marginTop={ this.props.isFullView ? "0" : "4px" }>
          <Field placeholder="Enter your coupon code" onChange={ this.checkFieldInput } />
          { (this.state.buttonIsActive) && (
            <ApplyButtonUI 
              label="Apply" 
              state="secondary"
              onClick={ ()=> (this.state.buttonIsActive) ? this.props.applyCoupon( this.state.fieldValue ) : null } />)}
      </CouponUI>
    );
   }
}
