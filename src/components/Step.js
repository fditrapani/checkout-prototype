import React from 'react';
import styled from 'styled-components';

//Components
import Button from '../components/Button';

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
  padding: 4px 0;
  text-align: center;
  display: block;
  border-radius: 100%;
  margin-right: 8px;
  vertical-align: middle;
  color: ${ props => props.colour };
`;

const StepTitle = styled.span`
  font-weight: ${ props => props.weight };
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
`;

export default class Step extends React.Component {
  static defaultProps = {
    borderWidth: "1px",
  };

  determineVisibility = ( state, component ) => {
    console.log(state);

    if ( state === component ) {
      return "block";
    }
    
    return "none"  
  }

  render() {
    return (
      <StepWrapper borderWidth={ this.props.borderWidth }>
        <Title>
          <StepNumber 
            colour={ this.props.state === "content" ? colours.white : colours.gray80 } 
            background={ this.props.state === "content" ? colours.highlight : colours.gray5 }>
              { this.props.number }
          </StepNumber>

          <StepTitle 
            weight={ this.props.state === "content" ? 700 : 300 }
          >{ this.props.title }</StepTitle>
        </Title>

        <Content display={ this.determineVisibility( this.props.state, "content" ) }>
          <div>{ this.props.content }</div>

          <Button 
            label="Continue"
            state="primary" />
        </Content>

        <Summary display={ this.determineVisibility( this.props.state, "summary" ) }>
          { this.props.summary }
        </Summary>
      </StepWrapper>
    );
   }
}
