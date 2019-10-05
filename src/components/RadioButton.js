import React from 'react';
import styled from 'styled-components';

//CSS
import { colours } from '../config/colours.js';

const Label = styled.label`
	display: block;
	position: relative;
	padding: 16px 14px;
	margin-top: 8px;
	border-radius: 3px;
	box-sizing: border-box;
	width: 100%;

	:first-child {
		margin: 0;
	}

	:hover {
		cursor: pointer;
	}

	:before {
		display: block;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		content: "";
		border: ${ props => props.borderWidth } solid ${ props => props.borderColour };
		border-radius: 3px;
		box-sizing: border-box;
	}

	:hover:before{
		border: 3px solid ${ colours.highlight };
	}
`;

const Radio = styled.input`
	margin-right: 5px;
	position: relative;
	display: inline-block;
	opacity: 0;	
`

const LabelText = styled.span`
	display: inline-block;
	position: relative;

	:after {
		display: block;
		width: 16px;
		height: 16px;
		content: "";
		border: ${ props => props.radioBorderWidth } solid ${ props => props.borderColour };
		border-radius: 100%;
		top: 01px;
		left: -20px;
		position: absolute;
		background: ${ colours.white };
		box-sizing: border-box;
		z-index: 2;
	}	
`

export default class RadioButton extends React.Component {
	getBorderColour = ( checked ) => {
		return ( checked ) ? colours.highlight : colours.gray20;
	}

	getBorderWith = ( checked ) => {			
		return ( checked ) ? "3px" : "1px";
	}

	getRadioBorderWith = ( checked ) => {			
		return ( checked ) ? "5px" : "1px";
	}

	render() {
		return(
			<Label 
				borderColour={ this.getBorderColour( this.props.checked ) }
				borderWidth={ this.getBorderWith( this.props.checked ) }>
				<span>
					<Radio 
						type="radio" 
						value={ this.props.value } 
						checked={ this.props.checked } 
						onChange={ this.props.onChange } />
					<LabelText 
						radioBorderWidth={ this.getRadioBorderWith( this.props.checked ) }
						borderColour={ this.getBorderColour( this.props.checked ) }	>
							{ this.props.label }
					</LabelText>
				</span>
			</Label>
		)
	}
}
