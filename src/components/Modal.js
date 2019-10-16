import React from 'react';
import styled, { keyframes } from 'styled-components';
import Button from './Button.js';

//CSS
import { colours } from '../config/colours.js';

const animateIn = keyframes`
  from {
    opacity: 0;
    transform: scale(1.08);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const ModalUi = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background: rgba( 0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  animation: ${ animateIn } 0.2s ease-out;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`

const ModalContentUI = styled.div`
  background: ${ colours.white };
  display: block;
  width: 100%;
  max-width: 300px;
  padding: 32px;
`;

const ModalTitleUI = styled.h2`
  margin: 0 0 16px;
  font-weight: 400;
  font-size: 24px;
  color: ${ colours.gray80 }
`

const ModalCopyUI = styled.p`
  margin: 0;
`

const ActionButtonsUI = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;

  button:first-child {
    margin-right: 8px;
  }
`

export default class Modal extends React.Component {

  componentDidMount(){
    document.addEventListener("keydown", this.escFunction, false);
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.escFunction, false);
  }

  escFunction = (event) => {
      if(event.keyCode === 27) {
        this.closeModal();
      }
    }

  closeModal = () => {
    //Animate first then
    this.props.closeModal();
  }

  preventClose = (e) => {
     e.stopPropagation();
  }

  render() {
    if( !this.props.isVisible ) {
      document.body.style="overflow:scroll";
      return null;
    }

    document.body.style="overflow:hidden";    

    return (
      <ModalUi onClick={ this.closeModal }>
          <ModalContentUI onClick={ this.preventClose }>
            <ModalTitleUI>{ this.props.title }</ModalTitleUI>
            <ModalCopyUI>{ this.props.copy }</ModalCopyUI>
            <ActionButtonsUI>
              <Button label="Cancel" onClick={ this.closeModal } tabIndex="2" />
              <Button label="Continue" state="primary" onClick={ this.props.primaryAction } tabIndex="3" />
            </ActionButtonsUI>
          </ModalContentUI>
      </ModalUi>
    );
   }
}
