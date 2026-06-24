import { useState } from 'react'
import './App.css'
import SessionForm from './components/SessionForm'
import Stats from './components/Stats'
import SessionList from './components/SessionList'

function App() {
  const [sessions, setSessions] = useState([])
  const stats = {
    totalSessions: sessions.length
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