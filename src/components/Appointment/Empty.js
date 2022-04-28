import React from 'react';

/**
 * Create Empty component.
 * Displays appointment availability to the user.
 * @param {Function} props.onAdd 
 * @returns JSX Empty component.
 */

export default function Empty(props){
  const { onAdd } = props;

  return(
    <main className='appointment__add' onClick={onAdd}>
      <img
        className='appointment__add-button'
        src='images/add.png'
        alt='Add'
      />
    </main>
  );
}