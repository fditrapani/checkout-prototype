import React from 'react';
import styled from 'styled-components';

//CSS
import { colours } from '../config/colours.js';

const Error = styled.div`
  display: block;
  padding: 24px 10px;
  border-left: 3px solid ${ colours.red50 };
  background: ${ colours.red0 };
  box-sizing: border-box;
  line-height: 1.2em;
`
export default class ErrorMessage extends React.Component {
  render() {
    return (
      <Error>
          { this.props.message }
      </Error>
    );
   }
}
