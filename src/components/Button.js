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

function returnBackgroundColour( state ) {
	switch (state) {
		case "primary":
			return colours.primary;
		case "disabled":
			return colours.gray0;
		default:
			return "none"
	}
}

function returnRollOverColour( state ) {
	switch (state) {
		case "primary":
			return colours.highlight;
		case "disabled":
			return colours.gray0;
		default:
			return "none"
	}
}

function returnBorderColour( state ) {
	switch (state) {
		case "primary":
			return colours.pink70;
		case "disabled":
			return colours.gray20;
		default:
			return colours.highlight;
	}
}

function returnRollOverBorderColour( state ) {
	switch (state) {
		case "primary":
			return colours.blue80;
		case "disabled":
			return colours.gray20;
		default:
			return colours.blue80;
	}
}

function returnTextColour( state ) {
	switch (state) {
		case "primary":
			return colours.white;
		case "disabled":
			return colours.gray20;
		default:
			return colours.highlight;
	}
}

function Button(props) {
	return(
		<CalltoAction 
			background={ returnBackgroundColour( props.state ) }
			borderColour={ returnBorderColour( props.state ) } 
			textColour={ returnTextColour( props.state ) } 
			rollOverColour= { returnRollOverColour( props.state ) }
			rollOverBorderColour= { returnRollOverBorderColour( props.state ) }>
			{ props.label }
		</CalltoAction>
	)
}

export default Button;
