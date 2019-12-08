import React from 'react';
import styled, { keyframes } from 'styled-components';

//CSS
import { colours } from '../config/colours.js';
import CheckIcon from './CheckIcon.js';

const animateIn = keyframes`
  from {
   opacity: 0;
   transform: translateX(50px);
  }

  to {
   opacity: 1;
   transform: translateX(0);
  }
`;

const NotificationUI = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  display: flex;
  animation: ${ animateIn } 0.2s ease-out;
  animation-fill-mode: backwards;
  z-index: 9999;
`;

const NotificationContent = styled.div`
  background: ${ colours.black };
  color: ${ colours.white };
  padding: 15px 15px 12px;
  border-radius: 0 3px 3px 0;
`
const NotificationIcon = styled.div`
  background: ${ colours.green50 };
  padding: 15px 15px 12px;
  border-radius: 3px 0 0 3px;
`

export default class Notification extends React.Component {
  render() {
    if( ! this.props.notificationVisibility ){
        return null;
    }

    return (     
      <NotificationUI>
          <NotificationIcon>
          <CheckIcon />
          </NotificationIcon>
          <NotificationContent>
            { this.props.notificationCopy } 
          </NotificationContent>
      </NotificationUI>
    );
   }
}
