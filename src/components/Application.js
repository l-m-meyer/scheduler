import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DayList from "components/DayList";
import Appointment from "components/Appointment";
import "components/Application.scss";
import { getAppointmentsForDay, getInterview } from 'helpers/selectors';


export default function Application(props) {
  const [state, setState] = useState({
    day: 'Monday',
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = day => setState({ ...state, day });
  const setDays = days => setState(prev => ({ ...prev, days }));
  
  const dailyAppointments = getAppointmentsForDay(state, state.day);
  const schedule = dailyAppointments.map((appointment) => {
    const interview = getInterview(state, appointment.interview);
    

    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interview={interview}
      />
    )
  })


  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('api/appointments'),
      axios.get('api/interviewers')
    ]).then((all) => {
      const days = all[0].data
      const appointments = all[1].data
      const interviewers = all[2].data
      console.log('interviewers', interviewers);
      setState(prev => ({...prev, days, appointments, interviewers}))
    })
  }, [])
  
  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={state.days}
            value={state.day}
            onChange={setDay}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {schedule}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  )
}
