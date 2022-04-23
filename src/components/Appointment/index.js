import React, { useState } from 'react';
import Header from "components/Appointment/Header";
import Show from "components/Appointment/Show";
import Empty from "components/Appointment/Empty";
import Form from "components/Appointment/Form";
import useVisualMode from 'hooks/useVisualMode';
// import { getInterviewersForDay } from 'helpers/selectors';
import "components/Appointment/styles.scss";

export default function Appointment(props) {
  const EMPTY = 'EMPTY';
  const SHOW = 'SHOW';
  const CREATE = 'CREATE';

  const { time, interview } = props;
  const { mode, transition, back } = useVisualMode(
    interview ? SHOW : EMPTY
  );



  return (
    <article className="appointment">
      <Header time={time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === CREATE && 
        <Form 
          interviewers={[]}
          onCancel={() => back(EMPTY)}
        />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interview={props.interview.interviewer}
        />
      )}
    </article>
  );
};