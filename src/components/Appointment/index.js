import React from 'react';
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from './Status';
import useVisualMode from 'hooks/useVisualMode';
import "components/Appointment/styles.scss";

export default function Appointment(props) {
  const EMPTY = 'EMPTY';
  const SHOW = 'SHOW';
  const CREATE = 'CREATE';
  const SAVING = 'SAVING';
  const DELETING = 'DELETING';

  const {
    id,
    time,
    interview,
    interviewers,
    bookInterview,
    cancelInterview
  } = props;

  const { mode, transition, back } = useVisualMode(
    interview ? SHOW : EMPTY
  );
  
  
  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    }
    transition(SAVING);
    bookInterview(id, interview)
      .then(() => transition(SHOW));
  }

  function onDelete() {
    transition(DELETING);
    cancelInterview(id, interview)
      .then(() => transition(EMPTY));
  }
  

  return (
    <article className="appointment">
      <Header time={time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === CREATE && 
        <Form 
          interviewers={interviewers}
          onCancel={() => back(EMPTY)}
          onSave={save}
        />
      }
      {mode === SAVING && <Status message={SAVING} />}
      {mode === SHOW && (
        <Show
          student={interview.student}
          interviewer={interview.interviewer.name}
          onDelete={onDelete}
        />
      )}
      {mode === DELETING && <Status message={DELETING} />}
    </article>
  );
};