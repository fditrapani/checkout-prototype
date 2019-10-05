import React from 'react';
import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export default class FlexColumn extends React.Component {
  render() {
    return (
      <Flex className={this.props.className}>
        { this.props.children }
      </Flex>
    );
   }
}
