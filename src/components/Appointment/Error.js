import React from 'react'

/**
 * Create Error component.
 * Displays an error to the user when attempting to save or delete appointment.
 * @param {String} props.message 
 * @param {Function} props.onClose 
 * @returns JSX Error component
 */

export default function Error(props){
  const { message, onClose } = props;

  return(
    <main className="appointment__card appointment__card--error">
      <section className="appointment__error-message">
        <h1 className="text--semi-bold">Error</h1>
        <h3 className="text--light">{message}</h3>
      </section>
      <img
        className="appointment__error-close"
        src="images/close.png"
        alt="Close"
        onClick={onClose}
      />
    </main>
  );
};