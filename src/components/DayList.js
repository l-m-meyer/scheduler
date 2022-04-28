import React from 'react';
import DayListItem from './DayListItem';
import 'components/DayList.scss'

/**
 * Create DayList component.
 * Displays the days of the week, number of available appointments per day, and indicates the selected day or full days.
 * @param {Array} props.days 
 * @param {String} props.value Day name
 * @param {Function} props.onChange 
 * @returns JSX DayList component
 */

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