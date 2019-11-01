import React from 'react';
import styled, { keyframes } from 'styled-components';

//Compontents
import CheckIcon from './CheckIcon.js';
import Button from './Button.js';

//CSS
import { colours } from '../config/colours.js';
import { breakpoints } from '../config/breakpoints.js';

const StepWrapper = styled.div`
  padding: 24px 16px;
  position: relative;
  border-top: 1px solid #ccc;

  @media( ${ breakpoints.tabletUp } ) {
    padding: 24px;
  }

  :first-child{
    border: 0;
  }
`;

const Title = styled.h2`
  font-size: 16px;
  display: flex;
  width: 100%;
  align-items: center;
  margin: 0 0 ${ props => props.marginBottom };
`;

const StepNumberWrapper = styled.div`
  width: 27px;
  height: 27px;
  perspective: 600px;
  margin-right: 8px;
`

const StepNumber = styled.div`
  width: 27px;
  height: 27px;
  position: relative; 
  transform-origin: center center;
  transition: transform 0.3s 0.1s ease-out;
  transform-style: preserve-3d;
  transform: ${ props => props.transform }
`;

const StepNumberBase = styled.div`
  position: absolute;
  width: 27px;
  height: 27px;
  line-height: 23px;
  backface-visibility: hidden;
  padding: 0;
  font-weight: normal;
  box-sizing: border-box;
  color: ${ props => props.colour };
  border-radius: 50%;  
  text-align: center;
  top: 0;
  left: 0;
`

const StepNumberNotCompleted = styled( StepNumberBase )`
  background: ${ props => props.background };
  border: 2px solid ${ props => props.borderColour };
`

const StepNumberCompleted = styled( StepNumberBase )`
  background: ${ colours.white }
  border: 2px solid ${ colours.green50 };
  transform: rotateY( 180deg );

  svg {
    margin-top: 2px;
  }
`

const StepTitle = styled.span`
  font-weight: ${ props => props.weight };
  color: ${ props => props.colour };
  margin-right: 5px;
`;

const Content = styled.div`
  color: ${ colours.gray80 };
  padding-left: 35px;
  display: ${ props => props.display };
  height: ${ props => props.height };
  opacity: ${ props => props.opacity };
  //transition: height 0.3s ease-out, opacity 0.2s ease-out, overflow 0.3s 0.1s ease;
  //overflow: hidden;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(4px);
  }

  80% {
    transform: translateY(-2px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Summary = styled.div`
  color: ${ colours.gray50 };
  padding-left: 35px;
  display: ${ props => props.display };
  line-height: 1.2em;
  font-size: 14px;
  animation: ${ fadeIn } 0.3s ease-in;
  animation-fill-mode: backwards;
`;

const InnerContentWrapperUI = styled.div`
  padding-bottom: 4px;
`;

const TotalPriceUi = styled.span`
  flex: 1;
  text-align: right;
`

export default class Step extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {
      innerContentHeight: 0,
    }
    
    this.innerContentWrapper = React.createRef();
  }

  componentDidMount() {
    this.setState({
      innerContentHeight: this.innerContentWrapper.current.clientHeight,
    })
  }

  componentDidUpdate( prevProps, prevState ) {
    const height = this.innerContentWrapper.current.clientHeight;

    if( prevState && prevState.innerContentHeight !== height ) {
      this.setState({
        innerContentHeight: height,
      })
    }
  }

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
        return colours.highlight;
      case "content":
        return colours.highlight;
      default:
        return colours.gray5;
    }
  }

  returnStepNumberBorderColour = () => {
    switch( this.props.status ){
      case "completed":
        return colours.highlight;
      case "content":
        return colours.highlight;
      default:
        return colours.gray5;
    }
  }

  returnStepNumberTransform = () => {
    switch( this.props.status ){
      case "completed":
        return "rotateY(180deg)";
      case "content":
        return "rotateY(0)";
      default:
        return "rotateY(0)";
    }
  }

  returnInnerContentHeight = () => {
    if( this.innerContentWrapper.current ) {
      console.log( this.innerContentWrapper.current.clientHeight );
    }
  }

  renderStepNumberContent = () => {
    return ( this.props.status === "completed" ) ? <CheckIcon /> : this.props.number;
  }

  renderTitle = () => {
    return ( this.props.status === "completed" ) ? this.props.completedTitle : this.props.title;
  }

  renderEditButton = () => {
    if ( this.props.status === "completed" && this.props.onEditButtonPress ){ 
      return (
        <Button
          state="text-button"
          label="Edit" 
          onClick={ this.props.onEditButtonPress }/>
      );
    }

    return null;
  }

  render() {

    return (
      <StepWrapper borderWidth={ this.props.borderWidth }>
        <Title marginBottom={ (this.props.status === "content" || this.props.status === "completed") ? "8px" : 0 }>
          <StepNumberWrapper>
            <StepNumber transform={ this.returnStepNumberTransform() }>
                <StepNumberNotCompleted 
                  colour={ this.returnStepNumberTextColour() }
                  background={ this.returnStepNumberColour() }
                  borderColour={ this.returnStepNumberBorderColour() }
                   >
                  {this.props.number}
                </StepNumberNotCompleted>
                <StepNumberCompleted>
                  <CheckIcon />
                </StepNumberCompleted>
            </StepNumber>
          </StepNumberWrapper>

          <StepTitle 
            weight={ this.props.status === "content" ? 600 : 400 }
            colour={ this.props.status === "content" ? colours.black : colours.gray80 }>
            { this.renderTitle() }</StepTitle> 
            { this.renderEditButton() }

            { this.props.totalPrice && (
              <TotalPriceUi>{ this.props.totalPrice }</TotalPriceUi>
            )}
        </Title>

        <Content 
          height={ ( this.props.status === "content" ) ? this.state.innerContentHeight + "px" : 0 }
          opacity={ ( this.props.status === "content" ) ? 1 : 0 }
          display={ ( this.props.status === "content" ) ? "block" : "none" } >
            <InnerContentWrapperUI ref={ this.innerContentWrapper }  >
              { this.props.content }
            </InnerContentWrapperUI>
        </Content>

        <Summary display={ (this.props.status === "summary" || this.props.status === "completed" ) ? "block" : "none" }>
          { this.props.summary }
        </Summary>
      </StepWrapper>
    );
   }
}
