import { useState } from 'react'
import './App.css'
import SessionForm from './components/SessionForm'
import Dashboard from './components/Dashboard'

function App() {
  const [sessions, setSessions] = useState([])

  function addSession(newSession) {
    setSessions(prevSessions => [...prevSessions, newSession])
  }

  return (
    <div>
      <h1>Private Driver Tracker</h1>
      <SessionForm onAddSession={addSession} />
      <Dashboard sessions={sessions} />
    </div>
  )
}

export default App