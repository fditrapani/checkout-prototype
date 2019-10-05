import React from 'react';
import styled from 'styled-components';

export default class FlexColumn extends React.Component {
  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
   }
}
