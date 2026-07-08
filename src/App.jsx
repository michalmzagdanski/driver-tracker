import { useState, useEffect } from 'react'
import './App.css'
import SessionForm from './components/SessionForm'
import Stats from './components/Stats'
import SessionList from './components/SessionList'
import { calculateHoursWorked } from './utils/helpers'
import EditSessionForm from './components/EditSessionForm'

function App() {
  const [sessions, setSessions] = useState([])
  const [editingSessionId, setEditingSessionId] = useState(null);

  const totalHoursWorked = sessions.reduce((total, session) => total + calculateHoursWorked(session.hoursFrom, session.hoursTo), 0)
  const totalEarnings = sessions.reduce((total, session) => total + Number(session.earnings), 0)
  const earningsPerHour = totalHoursWorked > 0 ? totalEarnings / totalHoursWorked : 0
  const sessionToEdit = sessions.find((session) => editingSessionId === session.id)
  const stats = {

    totalSessions: sessions.length,
    totalHoursWorked,
    totalEarnings,
    earningsPerHour

  }

  function addSession(newSession) {
    setSessions(prevSessions => [...prevSessions, newSession])
  }

  function updateSession(updatedSession) {
    setSessions(prevSessions =>
      prevSessions.map((session) =>
        session.id === updatedSession.id ? updatedSession : session)
    )
    setEditingSessionId(null);
  }
  function deleteSession(id) {
    setSessions(
      sessions.filter((session) => session.id !== id)
    );
  }

  function startEditing(id) {
    setEditingSessionId(id);
  }
  useEffect(() => {
    if (sessions.length > 0) {
      localStorage.setItem("sessions", JSON.stringify(sessions));
    }
  }, [sessions]);

  useEffect(() => {
    const saved = localStorage.getItem("sessions")

    if (saved) {
      setSessions(JSON.parse(saved))
    }
  }, [])



  return (
    <div>
      <h1>Private Driver Tracker</h1>
      <SessionForm onAddSession={addSession} />
      <SessionList sessions={sessions}
        deleteSession={deleteSession}
        startEditing={startEditing}
        editingSessionId={editingSessionId} />
      <Stats stats={stats} />
      {editingSessionId !== null && (<EditSessionForm
        key={editingSessionId}
        updateSession={updateSession}
        sessionToEdit={sessionToEdit} />

      )}
    </div>
  )
}

export default App