import React from 'react';
import styled from 'styled-components';

const FlexRowUI = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`
export default class FlexRow extends React.Component {
  render() {
    return (
      <FlexRowUI 
        gap={ this.props.gap }
        columnWidths={ this.props.columnWidths } 
        className={this.props.className} >
          { this.props.children }
      </FlexRowUI>
    );
   }
}
