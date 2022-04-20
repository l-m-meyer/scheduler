import React from 'react';
import DayListItem from './DayListItem';
import 'components/DayList.scss'

function DayList(props){
  const { days, value, onChange} = props

  const renderDayListItem = days.map((day) => 
    <DayListItem
      key={day.id}
      name={day.name}
      spots={day.spots}
      selected={day.name === value}
      setDay={onChange} 
    />
    
  
  )

  return(
    <ul>
      {renderDayListItem}
    </ul>
  );
};
export default DayList