import React, { useState } from 'react';
import classNames from 'classnames';
import "components/InterviewerListItem.scss";

function InterviewerListItem(props){
  const { id, name, avatar, selected, setInterviewer } = props;

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