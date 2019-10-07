import React from 'react';
import styled from 'styled-components';

//Compontents
import CheckIcon from './CheckIcon.js';
import Button from './Button.js';

//CSS
import { colours } from '../config/colours.js';

const StepWrapper = styled.div`
  padding-bottom: 32px;
  margin-bottom: 8px;
  position: relative;

  :after {
    display: block;
    width: ${ props => props.borderWidth };;
    height: calc(100% - 35px);
    position: absolute;
    left: 13px;
    top: 35px;
    background: ${ colours.gray20 };
    content: "";
  }

  :nth-child(5) {
    padding-bottom: 0;
  }
`;

const Title = styled.h2`
  font-size: 16px;
  display: flex;
  width: 100%;
  align-items: center;
  margin: 0 0 8px;
`;

const StepNumber = styled.span`
  background: ${ props => props.background };
  font-weight: normal;
  width: 27px;
  height: 27px;
  box-sizing: border-box;
  padding: 0;
  text-align: center;
  display: block;
  border-radius: 50%;
  margin-right: 8px;
  color: ${ props => props.colour };
  position: relative;
  line-height: 27px;

  :after {
    position: absolute;
    top: 0;
    left: 0;
    border: 2px solid ${ props => props.borderColour };
    content: "";
    display: block;
    width: 27px;
    height: 27px;
    border-radius: 50%;  
    box-sizing: border-box;
  }

  svg {
    margin-top: 4px;
  }
`;

const StepTitle = styled.span`
  font-weight: ${ props => props.weight };
  color: ${ props => props.colour };
  margin-right: 5px;
`;

const Content = styled.div`
  color: ${ colours.gray80 };
  padding-left: 35px;
  display: ${ props => props.display };
`;

const Summary = styled.div`
  color: ${ colours.gray50 };
  padding-left: 35px;
  display: ${ props => props.display };
  line-height: 1.2em;
  font-size: 14px;
`;

export default class Step extends React.Component {
  static defaultProps = {
    borderWidth: "1px",
  };

  determineVisibility = ( status, component ) => {
    if ( status === component ) {
      return "block";
    }
    
    return "none"  
  }

  returnStepNumberTextColour = () => {
    switch( this.props.status ){
      case "completed":
        return colours.white;
      case "content":
        return colours.white;
      default:
        return colours.gray80;
    }
  }

  returnStepNumberColour = () => {
    switch( this.props.status ){
      case "completed":
        return colours.white;
      case "content":
        return colours.highlight;
      default:
        return colours.gray5;
    }
  }

  returnStepNumberBorderColour = () => {
    switch( this.props.status ){
      case "completed":
        return colours.green50;
      case "content":
        return colours.highlight;
      default:
        return colours.gray5;
    }
  }

  renderStepNumberContent = () => {
    return ( this.props.status === "completed" ) ? <CheckIcon /> : this.props.number;
  }

  renderTitle = () => {
    return ( this.props.status === "completed" ) ? this.props.completedTitle : this.props.title;
  }

  renderEditButton = () => {
    if ( this.props.status === "completed" ){ 
      return (
        <Button
          status="text-button"
          label="Edit" 
          onClick={ this.props.onEditButtonPress }/>
      );
    }

    return null;
  }

  render() {
    return (
      <StepWrapper borderWidth={ this.props.borderWidth }>
        <Title>
          <StepNumber 
            colour={ this.returnStepNumberTextColour() } 
            background={ this.returnStepNumberColour() }
            borderColour={ this.returnStepNumberBorderColour() } >
              { this.renderStepNumberContent() }
          </StepNumber>

          <StepTitle 
            weight={ this.props.status === "content" ? 600 : 400 }
            colour={ this.props.status === "content" ? colours.black : colours.gray80 }>
            { this.renderTitle() }</StepTitle> 
            { this.renderEditButton() }
        </Title>

        <Content display={ ( this.props.status === "content" ) ? "block" : "none" }>
          <div>{ this.props.content }</div>
        </Content>

        <Summary display={ (this.props.status === "summary" || this.props.status === "completed" ) ? "block" : "none" }>
          { this.props.summary }
        </Summary>
      </StepWrapper>
    );
   }
}
