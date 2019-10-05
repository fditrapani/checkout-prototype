import React from 'react';
import styled from 'styled-components';

//CSS
import { colours } from '../config/colours.js';

export default class Field extends React.Component {
  render() {
    return (
      <div>
        <label for="this.props.id">{ this.props.label }</label>
        <input 
          id="this.props.id" 
          type={ this.props.type } 
          onChange={ this.props.onChange } 
          placeholder={ this.props.placeholder } />
        { this.props.content }
      </div>
    );
   }
}
