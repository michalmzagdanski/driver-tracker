import { useState, useEffect } from 'react'
import './App.css'
import SessionForm from './components/SessionForm'
import Stats from './components/Stats'
import SessionList from './components/SessionList'
import { calculateHoursWorked } from './utils/helpers'
import EditSessionForm from './components/EditSessionForm'
import WeeklyCostForm from './components/WeeklyCostForm'
import WeeklyCostList from './components/WeeklyCostList'

function App() {
  const [sessions, setSessions] = useState(() => {
  const saved = localStorage.getItem("sessions");
  return saved ? JSON.parse(saved) : [];
});
  const [editingSessionId, setEditingSessionId] = useState(null)
  const [weeklyCosts, setWeeklyCosts] = useState(() => {
  const saved = localStorage.getItem("weeklyCosts");
  return saved ? JSON.parse(saved) : [];
});
  const totalHoursWorked = sessions.reduce((total, session) => total + calculateHoursWorked(session.hoursFrom, session.hoursTo), 0)
  const totalEarnings = sessions.reduce((total, session) => total + Number(session.earnings), 0)
  const earningsPerHour = totalHoursWorked > 0 ? totalEarnings / totalHoursWorked : 0
  const sessionToEdit = sessions.find((session) => editingSessionId === session.id)
  const totalSessionCosts = sessions.reduce((acc, session) => acc + Number(session.congestion) + Number(session.parking), 0)
  const totalWeeklyCosts = weeklyCosts.reduce((acc, weeklyCost) => acc + Number(weeklyCost.amount), 0)
  const totalNetProfit = totalEarnings - totalSessionCosts - totalWeeklyCosts;
  const netEarningsPerHour = totalHoursWorked > 0 ? totalNetProfit / totalHoursWorked : 0

  const stats = {

    totalSessions: sessions.length,
    totalHoursWorked,
    totalEarnings,
    earningsPerHour,
    totalSessionCosts,
    totalWeeklyCosts,
    totalNetProfit,
    netEarningsPerHour

  }


  function addSession(newSession) {
    setSessions(prevSessions => [...prevSessions, newSession])
  }

  function addWeeklyCost(newWeeklyCost) {
    setWeeklyCosts(prevWeeklyCosts => [...prevWeeklyCosts, newWeeklyCost])
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
     
      localStorage.setItem("sessions", JSON.stringify(sessions));
    
  }, [sessions]);
  
  useEffect(() => {
      localStorage.setItem("weeklyCosts", JSON.stringify(weeklyCosts));
    }
  , [weeklyCosts]);

  



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
      <WeeklyCostForm onAddWeeklyCost={addWeeklyCost} />
      <WeeklyCostList weeklyCosts={weeklyCosts} />
    </div>
  )
}

export default App