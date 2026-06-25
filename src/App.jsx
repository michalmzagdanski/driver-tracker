import { useState } from 'react'
import './App.css'
import SessionForm from './components/SessionForm'
import Stats from './components/Stats'
import SessionList from './components/SessionList'
import { calculateHoursWorked } from './utils/helpers'

function App() {
  const [sessions, setSessions] = useState([])

  const totalHoursWorked = sessions.reduce((total, session) => total + calculateHoursWorked(session.hoursFrom, session.hoursTo), 0)
  const totalEarnings = sessions.reduce((total, session) => total + Number(session.earnings), 0)
  const earningsPerHour = totalHoursWorked > 0 ? totalEarnings / totalHoursWorked : 0

  const stats = {

    totalSessions: sessions.length,
    totalHoursWorked,
    totalEarnings,
    earningsPerHour

  }
  function addSession(newSession) {
    setSessions(prevSessions => [...prevSessions, newSession])
  }


  return (
    <div>
      <h1>Private Driver Tracker</h1>
      <SessionForm onAddSession={addSession} />
      <SessionList sessions={sessions} />
      <Stats stats={stats} />
    </div>
  )
}

export default App