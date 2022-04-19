import React from 'react';
import DayListItem from './DayListItem';
import 'components/DayList.scss'

function DayList(props){
  const { days, day, setDay} = props

  const renderDayListItem = days.map((item) => 
    <DayListItem
      key={item.id}
      name={item.name}
      spots={item.spots}
      selected={item.name === day}
      setDay={setDay} 
    />
    
  
  )

  return(
    <ul>
      {renderDayListItem}
    </ul>
  );
};
export default DayList