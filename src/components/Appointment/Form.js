import React, { useState } from 'react';
import Button from 'components/Button';
import InterviewerList from 'components/InterviewerList';

export default function Form(props) {
  const { 
    student,
    interviewer,
    interviewers,
    onSave,
    onCancel    
  } = props;

  // const [student, setStudent] = useState('');
  // const [interviewer, setInterviewer] = useState(0);

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={"Lisa" || student}
            // onChange={() => setStudent(value)}
          />
        </form>
        <InterviewerList
          interviewers={interviewers}
          value={interviewer}
          // onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={onCancel}>Cancel</Button>
          <Button confirm onClick={onSave}>Save</Button>
        </section>
      </section>
    </main>
  );
};