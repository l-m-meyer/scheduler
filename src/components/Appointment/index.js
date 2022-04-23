import React, { useState } from 'react';
import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";
import useVisualMode from 'hooks/useVisualMode';
import "components/Appointment/styles.scss";

export default function Appointment(props){
  const { time, interview } = props;

  const EMPTY = 'EMPTY';
  const SHOW = 'SHOW';

  return(
    <article className="appointment">
      <Header time={time} />
      {interview ? <Show {...interview} /> : <Empty />}
    </article>
  );
};