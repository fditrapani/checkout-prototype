import React from 'react';
import styled from 'styled-components';
import Field from './Field';
import Button from './Button';

//CSS
import { colours } from '../config/colours.js';

const CouponUI = styled.div`
  border-top: 1px solid ${ colours.gray10 };
  margin-top: 24px;
  padding-top: 24px;
  position: relative;
`

const ApplyButtonUI = styled(Button)`
  position: absolute;
  bottom: 4px;
  right: 1px;
  border: 0;
  box-shadow: none;

  :hover {
    background: none;
    border: 0;
    box-shadow: none;
    color: ${ colours.primary }
  }

  :active {
    background: none;
    border: 0;
    box-shadow: none;
    color: ${ colours.highlight }
  }
`

export default class Coupon extends React.Component {
  render() {
    return (
      <CouponUI>
          <Field label="Add a coupon" placeholder="Enter your code" />
          <ApplyButtonUI label="Apply" />
      </CouponUI>
    );
   }
}
