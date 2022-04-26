import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useApplicationData(props){
  const [state, setState] = useState({
    day: 'Monday',
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = day => setState({ ...state, day });

  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ]).then((all) => {
      const days = all[0].data
      const appointments = all[1].data
      const interviewers = all[2].data
      setState(prev => ({...prev, days, appointments, interviewers}))
    })
  }, [])

  function getSpots(newState) {
    return newState.days.map(day => {
      return {
        ...day,
        spots: day.appointments
          .filter((id) => newState.appointments[id].interview === null)
          .length
      }
    })
  }

  function cancelInterview(id) {

    const appointment = {
      ...state.appointments[id],
      interview: null
    }

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const newState = {
      ...state,
      appointments
    }

    const spots = getSpots(newState);

    return axios.delete(`/api/appointments/${id}`)
      .then(() => {
        setState({
          ...state,
          days: spots,
          appointments 
        })

      })
      
  }

  function bookInterview(id, interview) {

    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const newState = {
      ...state,
      appointments
    }

    const spots = getSpots(newState);

    return axios.put(`/api/appointments/${id}`, {interview})
      .then(() => {
        setState({
          ...state,
          days: spots,
          appointments
        });
      })
      
  }

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  }
};