import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: ${ props => props.columnWidths };
  grid-column-gap: ${ props => props.gap };
  justify-items: stretch;
`
export default class GridRow extends React.Component {
  render() {
    return (
      <Row 
        gap={ this.props.gap }
        columnWidths={ this.props.columnWidths } 
        className={this.props.className} >
          { this.props.children }
      </Row>
    );
   }
}
