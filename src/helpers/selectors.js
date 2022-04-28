/**
 * Function finds the appointments scheduled on a given day.
 * @param {Object} state 
 * @param {String} day 
 * @returns An array of the day's appointments or an empty array
 */

export const getAppointmentsForDay = (state, selectedDayName) => {
  const dayAppointments = state.days.find(appointment => appointment.name === selectedDayName);
  
  if (!dayAppointments) return [];

  return dayAppointments.appointments.map(id => state.appointments[id]);
}

/**
 * Function generates the interview details.
 * @param {Object} state 
 * @param {Object} interview 
 * @returns An object with the interview details or null
 */

export const getInterview = (state, interview)  => {
  if (!interview) return null;

  return {
    ...interview, 
    interviewer: state.interviewers[interview.interviewer]
  };
}

/**
 * Function finds the interviewers for a given day.
 * @param {Object} state 
 * @param {String} selectedDayName 
 * @returns An array with the ids of the available interviewers or an empty array.
 */

export const getInterviewersForDay = (state, selectedDayName) => {

  const selectedDay = state.days.find(day => day.name === selectedDayName);
  if (!selectedDay) return [];

  const interviewerIds = selectedDay.interviewers;
  const interviewers = state.interviewers;
  const interviewersArr = Object.values(interviewers);

  const selectedDayInterviewers = interviewerIds.map((id) =>  {
    return interviewersArr.find((interviewer) => interviewer.id === id)
  });

  return selectedDayInterviewers;  
}