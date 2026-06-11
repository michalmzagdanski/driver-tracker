import { useState } from 'react'
import './App.css'
import SessionForm from './components/SessionForm'
import Dashboard from './components/Dashboard'

function App() {
  const [sessions, setSessions] = useState([])
  return (
    <div>
      <h1>Private Driver Tracker</h1>
      <SessionForm onAddSession={setSessions} />
      <Dashboard sessions={sessions} />
    </div>
  )
}

export default App