import React from 'react';
import styled from 'styled-components';

//CSS
import { colours } from '../config/colours.js';

const CalltoAction = styled.button`
	display: block;
	width: 100%;
	font-size: 1em;
	border-radius: 3px;
	padding: 10px;
	background: ${ props => props.background };
	border: 1px solid ${ props => props.borderColour };
	color: ${ props => props.textColour };
	box-shadow: 0 1px 0 ${ props => props.borderColour };

	:hover {
		cursor: pointer;
		background: ${ props => props.rollOverColour };
		border: 1px solid ${ props => props.rollOverBorderColour };
		box-shadow: 0 1px 0 ${ props => props.rollOverBorderColour };
	}
`;

export default class Button extends React.Component {
	returnBackgroundColour = ( state ) => {
		switch ( state ) {
			case "primary":
				return colours.primary;
			case "disabled":
				return colours.gray0;
			default:
				return "none"
		}
	}

	returnRollOverColour = ( state ) => {
		switch ( state ) {
			case "primary":
				return colours.highlight;
			case "disabled":
				return colours.gray0;
			default:
				return "none"
		}
	}

	returnBorderColour = ( state ) => {
		switch ( state ) {
			case "primary":
				return colours.pink70;
			case "disabled":
				return colours.gray20;
			default:
				return colours.highlight;
		}
	}

	returnRollOverBorderColour = ( state ) => {
		switch ( state ) {
			case "primary":
				return colours.blue80;
			case "disabled":
				return colours.gray20;
			default:
				return colours.blue80;
		}
	}

	returnTextColour = ( state ) => {
		switch ( state ) {
			case "primary":
				return colours.white;
			case "disabled":
				return colours.gray20;
			default:
				return colours.highlight;
		}
	}

	render() {
		return(
			<CalltoAction 
				background={ this.returnBackgroundColour( this.props.state ) }
				borderColour={ this.returnBorderColour( this.props.state ) } 
				textColour={ this.returnTextColour( this.props.state ) } 
				rollOverColour= { this.returnRollOverColour( this.props.state ) }
				rollOverBorderColour= { this.returnRollOverBorderColour( this.props.state ) }>
				{ this.props.label }
			</CalltoAction>
		)
	}
}
