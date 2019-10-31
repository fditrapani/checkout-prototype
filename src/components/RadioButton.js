import React from 'react';
import styled from 'styled-components';

//CSS
import { colours } from '../config/colours.js';

const LabelWrapper = styled.div`
	position: relative;
	margin-top: 8px;
	border-radius: 3px;
	box-sizing: border-box;
	width: 100%;
	outline: ${ props => props.outline };

	:first-child {
		margin: 0;
	}

	img{
		filter: grayscale( ${ props => props.grayscale });
	}

	:hover img {
		filter: grayscale( 0 );
	}
`;

const Radio = styled.input`
	margin-right: 7px;
	position: absolute;
	display: inline-block;
	opacity: 0;	

`

const LabelText = styled.label`
	display: inline-block;
	position: relative;
	font-size: 14px;
	transform: translateY(-1px);
	padding: 16px 14px 16px 40px;
	box-sizing: border-box;
	width: 100%;

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
	

	:after {
		display: block;
		width: 16px;
		height: 16px;
		content: "";
		border: ${ props => props.radioBorderWidth } solid ${ props => props.borderColour };
		border-radius: 100%;
		top: 50%;
		transform: translateY( -50% );
		left: 16px;
		position: absolute;
		background: ${ colours.white };
		box-sizing: border-box;
		z-index: 2;
	}	
`;

const SupportImage = styled.img`
	position: absolute;
	right: 16px;
	top: 16px;
`

export default class RadioButton extends React.Component {
	constructor() {
	  super();

	  this.state = {
	    isFocused: false,
	  }
	}

	getBorderColour = ( checked ) => {
		return ( checked ) ? colours.highlight : colours.gray20;
	}

	getBorderWith = ( checked ) => {			
		return ( checked ) ? "3px" : "1px";
	}

	getRadioBorderWith = ( checked ) => {			
		return ( checked ) ? "5px" : "1px";
	}

	getgrayscaleValue = ( ) => {
		return this.props.checked ? 0 : "100%";
	};

	renderSupportingImage = () => {
		if( this.props.imageURL ){
			return (
				<SupportImage src={ this.props.imageURL } alt=" "/>
			)
		}

		return null;
	}

	getOutline = () => {
		if( this.state.isFocused ) {
			return "#5198D9 auto 5px";
		}

		return "0"
	}

	changeFocus = ( value ) => {
		this.setState({
			isFocused: value,
		});
	}

	render() {

		return(
			<LabelWrapper 
				
				grayscale={ this.getgrayscaleValue() }
				outline={ this.getOutline() } >

					<Radio 
						type="radio" 
						value={ this.props.value } 
						id={ this.props.value } 
						checked={ this.props.checked } 
						onChange={ this.props.onChange }
						onFocus={ () => { this.changeFocus( true ) } }
						onBlur={ () => { this.changeFocus( false ) } } />
					<LabelText 
						radioBorderWidth={ this.getRadioBorderWith( this.props.checked ) }
						borderColour={ this.getBorderColour( this.props.checked ) }	
						htmlFor={ this.props.value } 
						borderWidth={ this.getBorderWith( this.props.checked ) }>
							{ this.props.label }
					</LabelText>

					{ this.renderSupportingImage() }

					{ this.props.children }
			</LabelWrapper>
		)
	}
}
