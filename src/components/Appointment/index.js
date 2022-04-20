import React, { useState } from 'react';
import "components/Appointment/styles.scss";

export default function Appointment(props){
  const { time } = props;

  const showAppointmentTime = (time) => {
    if (!time) return 'No appointments'
    return `Appointment at ${time}`
  }

  return(
    <article className="appointment">{showAppointmentTime}</article>
  );
};