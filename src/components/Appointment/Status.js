import React from 'react';

/**
 * Create Status component.
 * Displays a status message to user to indicate the action of SAVING or DELETING
 * @param {String} props.message status message of SAVING or DELETING
 * @returns JSX Status component
 */

export default function Status(props){
  const { message } = props;

  return(
    <main className="appointment__card appointment__card--status">
      <img
        className="appointment__status-image"
        src="images/status.png"
        alt="Loading"
      />
      <h1 className="text--semi-bold">{message}</h1>
    </main>
  );
};