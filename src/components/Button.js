import React from "react";
import classNames from 'classnames';
import "components/Button.scss";

/**
 * Create Button component.
 * Displays the correct css for each button type. 
 * @param {Boolean} props.confirm
 * @param {Boolean} props.danger
 * @param {Boolean} props.disabled
 * @param {Function} props.onClick
 * @returns JSX Button component
 */

export default function Button(props) {
   const { confirm, danger, onClick, disabled } = props;

   const buttonClass = classNames(
      'button', 
      { 'button--confirm': confirm }, 
      { 'button--danger':danger }
   )

   return (
      <button 
         className={buttonClass} 
         onClick={onClick} 
         disabled={disabled}
      >
         {props.children}
      </button>
   );
} 
