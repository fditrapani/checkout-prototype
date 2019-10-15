import React from 'react';
import styled from 'styled-components';
import Field from './Field';
import Button from './Button';

//CSS
import { colours } from '../config/colours.js';

const CouponUI = styled.div`
  border-top: 1px solid ${ colours.gray10 };
  margin: 24px ${ props => props.marginRight } 0 0;
  padding-top: 24px;
  position: relative;
`

const ApplyButtonUI = styled(Button)`
  position: absolute;
  bottom: 4px;
  right: 1px;
  border: 0;
  box-shadow: none;
  color: ${ props => props.color }

  :hover {
    background: none;
    border: 0;
    box-shadow: none;
    color: ${ props => props.hoverColor };
    cursor: ${ props => props.cursor };
  }

  :active {
    background: none;
    border: 0;
    box-shadow: none;
    color: ${ props => props.color }
  }
`

export default class Coupon extends React.Component {
  constructor() {
    super();

    this.state = {
      buttonIsActive: false,
      fieldValue: "",
    }
  }

  clickApplyButton = () => {
    if( this.state.buttonIsActive ) {
      alert("Clicked");
    }

    return null;
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
      <CouponUI marginRight={ this.props.isFullView ? "50px" : "0" }>
          <Field label="Add a coupon" placeholder="Enter your code" onChange={ this.checkFieldInput } />
          <ApplyButtonUI 
            label="Apply" 
            color={ this.state.buttonIsActive ? colours.highlight : colours.gray20 }
            cursor={ this.state.buttonIsActive ? "pointer" : "not-allowed" }
            hoverColor={ this.state.buttonIsActive ? colours.primary : colours.gray20 }
            onClick={ ()=>this.props.applyCoupon( this.state.fieldValue ) } />
      </CouponUI>
    );
   }
}
