import React from 'react';
import styled from 'styled-components';

const SVGIcon = styled.svg`
  display: block;
`;

export default class LocationIcon extends React.Component {
  render() {
    return (
      <SVGIcon width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask10" mask-type="alpha" maskUnits="userSpaceOnUse" x="4" y="2" width="12" height="18">
        <path fillRule="evenodd" clipRule="evenodd" d="M10 2.46011C12.7583 2.46011 15 4.70178 15 7.46011C15 11.2101 10 16.6268 10 16.6268C10 16.6268 5.00001 11.2101 5.00001 7.46011C5.00001 4.70178 7.24167 2.46011 10 2.46011ZM15.8333 19.1268V17.4601H4.16667V19.1268H15.8333ZM6.66667 7.46011C6.66667 5.61845 8.15834 4.12678 10 4.12678C11.8417 4.12678 13.3333 5.61845 13.3333 7.46011C13.3333 9.23511 11.6 12.0101 10 14.0518C8.40001 12.0184 6.66667 9.23511 6.66667 7.46011ZM8.33334 7.46011C8.33334 6.54345 9.08334 5.79345 10 5.79345C10.9167 5.79345 11.6667 6.54345 11.6667 7.46011C11.6667 8.37678 10.925 9.12678 10 9.12678C9.08334 9.12678 8.33334 8.37678 8.33334 7.46011Z" fill="white"/>
        </mask>
        <g mask="url(#mask10)">
        <rect y="0.793457" width="20" height="20" fill="#006088"/>
        </g>
      </SVGIcon>
    );
   }
}
