import React from 'react';

export default class CheckIcon extends React.Component {
  render() {
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask1" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="4" width="16" height="12">
        <path d="M7.32916 13.2292L3.85416 9.75417L2.67083 10.9292L7.32916 15.5875L17.3292 5.58751L16.1542 4.41251L7.32916 13.2292Z" fill="white"/>
        </mask>
        <g mask="url(#mask1)">
        <rect width="20" height="20" fill="#FFFFFF"/>
        </g>
      </svg>
    );
   }
}
