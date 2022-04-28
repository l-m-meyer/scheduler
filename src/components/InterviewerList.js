import React from 'react';
import InterviewerListItem from './InterviewerListItem';
import 'components/InterviewerList.scss';
import PropTypes from 'prop-types';

/**
 * Create InterviewerList component.
 * Displays the list of available interviewers on a given day.
 * @param {Array} props.interviewers List of interviewers
 * @param {Number} props.value Interviewer id
 * @param {Function} props.onChange
 * @returns JSX InterviewerList component
 */

export default function InterviewerList(props){
  const {
    interviewers,
    value,
    onChange
  } = props;
  
  const renderInterviewerItem = interviewers.map(interviewer => 
    <InterviewerListItem 
      key={interviewer.id}
      name={interviewer.name}
      avatar={interviewer.avatar}
      selected={interviewer.id === value}
      setInterviewer={() => onChange(interviewer.id)}
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

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
}