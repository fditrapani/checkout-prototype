import React from 'react';
import styled from 'styled-components';

//CSS
import { colours } from '../config/colours.js';
//import { breakpoints } from '../config/breakpoints.js';

const StepWrapper = styled.div`
    padding-bottom: 32px;
    margin-bottom: 8px;
    position: relative;

    :after {
      display: block;
      width: 1px;
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
    margin: 0;
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

function Step(props) {
  return (
    <StepWrapper>
      <Title>
        <StepNumber 
          colour={ props.display === "content" ? colours.white : colours.gray80 } 
          background={ props.display === "content" ? colours.highlight : colours.gray5 }>
            { props.number }
        </StepNumber>

        <StepTitle 
          weight={ props.display === "content" ? 700 : 300 }
        >{ props.title }</StepTitle>
      </Title>
    </StepWrapper>
  );
}

export default Step;
