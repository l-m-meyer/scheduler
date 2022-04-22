


const getAppointmentsForDay = (state, day) => {

  // 1. find object in state.days that matches provided day
  const days = Object.values(state.days).filter(day => day.name === day? day.id : null);

  let dayID;
  for(day of days) {
    if (day.name === day) {
      return dayID = day.id
    }
  }
  // 2. iterate through day comparing its id with state.appointments id and return that value
  let appointmentID;
  const appointment = Object.values(state.appointments).filter(appointment => dayID === appointment.id ? appointmentID = appointment.id : null);

  // 3. validation
  // if there are no appointments on day, days data will return empty array
  

}