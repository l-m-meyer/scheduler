import React from 'react';
import classNames from 'classnames';
import "components/InterviewerListItem.scss";

/**
 * Create InterviewerListItem component.
 * Displays a photo and the name of the selected interviewer.
 * @param {String} props.name Interviewer name
 * @param {String} props.avatar Interviewer photo
 * @param {Boolean} props.selected
 * @param {Function} props.setInterviewer
 * @returns JSX InterviewerList component
 */

function InterviewerListItem(props){
  const { name, avatar, selected, setInterviewer } = props;

  const interviewerClass = classNames( 
    'interviewers__item',
    {'interviewers__item--selected': selected},
  );

  return(
    <li onClick={setInterviewer} className={interviewerClass}>
      <img 
        className="interviewers__item-image"
        src={avatar}
        alt={name}
      />
      {selected && name}
    </li>
  );
};
export default InterviewerListItem;