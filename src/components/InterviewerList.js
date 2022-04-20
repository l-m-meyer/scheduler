import React, { useState } from 'react';
import InterviewerListItem from './InterviewerListItem';
import 'components/InterviewerList.scss';

export default function InteviewerList(props){
  const { interviewers, interviewer, setInterviewer } = props;

  const renderInterviewerItem = interviewers.map(item => 
    <InterviewerListItem 
      key={item.id}
      name={item.name}
      avatar={item.avatar}
      selected={item.id === interviewer}
      setInterviewer={() => setInterviewer(item.id)}
    />
  )

  return(
    <section className='interviewers'>
      <h4 className='interviewers__header text--light'>Interviewer</h4>
      <ul className='interviewers__list'>
        {renderInterviewerItem}
      </ul>
    </section>
  );
};