
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
  // console.log('state:',state);
  // console.log('selectedDayName', selectedDayName);
  const selectedDay = state.days.find(day => day.name === selectedDayName);
  // console.log('selectedDay', selectedDay);
  if (!selectedDay) return [];

  const interviewerIds = selectedDay.interviewers;
  const interviewers = state.interviewers;
  const interviewersArr = Object.values(interviewers);
  // console.log('interviewers', interviewers);
  console.log('interviewersArr: ', interviewersArr);
  console.log('interviewerIds:',interviewerIds)

  const selectedDayInterviewers = interviewerIds.map((id) =>  {
    interviewersArr.find((interviewer) => interviewer.id === id)
  });
  console.log('selectedDayInterviewers: ', selectedDayInterviewers);

  return selectedDayInterviewers;

  
}