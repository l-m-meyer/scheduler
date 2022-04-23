
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


export const getInterviewersForDay = () => {

}