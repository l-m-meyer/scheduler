


export default function getAppointmentsForDay (state, day) {
  const dayAppointments = (state.days).find(item => item.name === day);
  
  if (!dayAppointments) return [];

  return (dayAppointments.appointments).map(id => state.appointments[id]);
}
