import React from 'react';
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from './Status';
import Confirm from './Confirm';
import Error from './Error';
import useVisualMode from 'hooks/useVisualMode';
import "components/Appointment/styles.scss";

/**
 * Create Appointment component.
 * Displays the appropriate visual mode to the user as they interact with the page.
 * @param {Number} props.id Appointment id
 * @param {String} props.time Appointment start time
 * @param {Object} props.interview
 * @param {Array} props.interviewers 
 * @param {Function} props.bookInterview
 * @param {Function} props.cancelInterview
 * @returns JSX Appointment component
 */

export default function Appointment(props) {
  const EMPTY = 'EMPTY';
  const SHOW = 'SHOW';
  const CREATE = 'CREATE';
  const SAVING = 'SAVING';
  const DELETING = 'DELETING';
  const CONFIRM = 'CONFIRM';
  const EDIT = 'EDIT';
  const ERROR_SAVE = 'ERROR_SAVE';
  const ERROR_DELETE = 'ERROR_DELETE';

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
    };
    transition(SAVING);
    bookInterview(id, interview)
      .then(() => transition(SHOW))
      .catch(error => transition(ERROR_SAVE, true));
  }

  function onDelete(id) {
    transition(DELETING, true);
    cancelInterview(id)
      .then(() => transition(EMPTY))
      .catch(error => transition(ERROR_DELETE, true));
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
      {mode === ERROR_SAVE && <Error message='Could not save appointment' onClose={() => back()} />}
      {mode === SHOW && (
        <Show
          student={interview.student}
          interviewer={interview.interviewer.name}
          onEdit={() => transition(EDIT)}
          onDelete={() => transition(CONFIRM)}
        />
      )}
      {mode === EDIT && 
        <Form
          student={interview.student}
          interviewer={interview.interviewer.id}
          interviewers={interviewers}
          onCancel={() => back(SHOW)}
          onSave={save}
        />
      }
      {mode === CONFIRM && 
        <Confirm 
          message='Delete the appointment?'
          onConfirm={() => onDelete(id)}
          onCancel={() => back(SHOW)}
        />
      }
      {mode === DELETING && <Status message={DELETING} />}
      {mode === ERROR_DELETE && <Error message='Could not delete appointment' onClose={() => back(SHOW)} />}
    </article>
  );
};