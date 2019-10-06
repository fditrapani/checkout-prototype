import React from 'react';
import styled from 'styled-components';

//CSS
import { colours } from '../config/colours.js';

const Label = styled.label`
  display: block;
  color: ${ colours.gray80 };
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 8px;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;
  border: 1px solid ${ colours.gray20 };
  padding: 12px 10px;

  ::-webkit-inner-spin-button, 
  ::-webkit-outer-spin-button { 
    -webkit-appearance: none;
  }

  [type=number], 
  [type=number] { 
    -moz-appearance: none;
    appearance: none; 
  }
`;

export default class Field extends React.Component {
  render() {
    return (
      <div className={ this.props.className }>
        <Label htmlFor={ this.props.value }>{ this.props.label }</Label>
        <Input
          id={ this.props.value }
          type={ this.props.type } 
          onChange={ this.props.onChange } 
          placeholder={ this.props.placeholder } />
        { this.props.content }
      </div>
    );
   }
}
