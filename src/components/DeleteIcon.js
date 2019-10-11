import React from 'react';

export default class DeleteIcon extends React.Component {
  render() {
    return (
      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="trashIcon" mask-type="alpha" maskUnits="userSpaceOnUse" x="5" y="3" width="15" height="18">
        <path fillRule="evenodd" clipRule="evenodd" d="M15.4456 3L16.4456 4H19.9456V6H5.94557V4H9.44557L10.4456 3H15.4456ZM6.94557 19C6.94557 20.1 7.84557 21 8.94557 21H16.9456C18.0456 21 18.9456 20.1 18.9456 19V7H6.94557V19ZM8.94557 9H16.9456V19H8.94557V9Z" fill="white"/>
        </mask>
        <g mask="url(#trashIcon)">
        <rect x="0.945572" width="24" height="24" fill="#8E9196"/>
        </g>
      </svg>
    );
   }
}
