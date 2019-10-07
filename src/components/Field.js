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
  padding: 12px ${ props => props.rightPadding } 12px 10px;

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

const InputWrapper = styled.div`
  position: relative;
`;

const FieldIcon = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
`

export default class Field extends React.Component {
  renderIcon = () => {
    if ( this.props.iconURL ) {
      return <FieldIcon src={ this.props.iconURL } alt="" />
    }

    return null;
  }

  editField = () => {
    if( this.props.onChange ){
      this.props.onChange()
    }

    return null;
  }

  onBlurField = () => {
    return null;
  }

  returnRightPadding = () => {
    return this.props.iconURL ? "30px" : "10px"
  }

  render() {
    return (
      <div className={ this.props.className }>
        <Label htmlFor={ this.props.value }>{ this.props.label }</Label>
        <InputWrapper>
          <Input
            id={ this.props.value }
            type={ this.props.type } 
            onChange={ this.editField } 
            onBlur={ this.onBlurField }
            placeholder={ this.props.placeholder }
            rightPadding={ this.returnRightPadding() } />
          { this.renderIcon() }
        </InputWrapper>
        { this.props.content }
      </div>
    );
   }
}
