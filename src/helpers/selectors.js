
export const getAppointmentsForDay = (state, day) => {
  const dayAppointments = state.days.find(item => item.name === day);
  
  if (!dayAppointments) return [];

  return dayAppointments.appointments.map(id => state.appointments[id]);
}

export const getInterview = (state, interview)  => {
  if (!interview) return null;

  return {
    ...interview, 
    interviewer: state.interviewers[interview.interviewer]
  };
}

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