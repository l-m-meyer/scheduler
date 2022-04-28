import React from 'react';
import classNames from 'classnames';
import 'components/DayListItem.scss'

/**
 * Create DayListItem component.
 * Renders the individual list items that make up DayList.
 * @param {String} props.name Day name
 * @param {Number} props.spots Number of available appointments
 * @param {Boolean} props.selected Changes the background color when true
 * @param {Function} props.setDay
 * @returns JSX DayListItem component
 */

export default function DayListItem(props){
  const { name, spots, selected, setDay } = props;

  const dayClass = classNames( 
    'day-list__item',
    {'day-list__item--selected': selected},
    {'day-list__item--full': spots === 0},
  );
  
  const formatSpots = (spots) => {
    if (!spots) return 'no spots remaining'
    if (spots === 1) return '1 spot remaining'
    return `${spots} spots remaining`
  }

  

  return(
    <li onClick={() => setDay(name)} className={dayClass} data-testid="day" >
      <h2 className="text--regular">{name}</h2>
      <h3 className="text--light">{formatSpots(spots)}</h3>
    </li>
  );
};
