import React from 'react';

/**
 * Create Header component.
 * Displays the appointment time and separates each appointment block.
 * @param {String} props.time 
 * @returns JSX Header component
 */

export default function Header(props){
  const { time } = props

  return(
    <header className='appointment__time'>
      <h4 className='text--semi-bold'>{time}</h4>
      <hr className='appointment__separator' />
    </header>
  );
}