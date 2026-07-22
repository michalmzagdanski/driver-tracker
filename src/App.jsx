import { useState, useEffect } from 'react'
import './App.css'
import SessionForm from './components/SessionForm'
import Stats from './components/Stats'
import SessionList from './components/SessionList'
import { calculateHoursWorked, filterItemsByWeek, getFilteredSessions, getSortedSessions } from './utils/helpers'
import EditSessionForm from './components/EditSessionForm'
import WeeklyCostForm from './components/WeeklyCostForm'
import WeeklyCostList from './components/WeeklyCostList'
import EditWeeklyCostForm from './components/EditWeeklyCostForm'

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
  const [editingWeeklyCostId, setEditingWeeklyCostId] = useState(null);
  const [filterMode, setFilterMode] = useState("all")
  const [filterDate, setFilterDate] = useState("")
  const [sortMode, setSortMode] = useState("newest")

  const totalHoursWorked = sessions.reduce((total, session) => total + calculateHoursWorked(session.hoursFrom, session.hoursTo), 0)
  const totalEarnings = sessions.reduce((total, session) => total + Number(session.earnings), 0)
  const earningsPerHour = totalHoursWorked > 0 ? totalEarnings / totalHoursWorked : 0
  const sessionToEdit = sessions.find((session) => editingSessionId === session.id)
  const weeklyCostToEdit = weeklyCosts.find((weeklyCost) => editingWeeklyCostId === weeklyCost.id)
  const totalSessionCosts = sessions.reduce((acc, session) => acc + Number(session.congestion) + Number(session.parking) + Number(session.fuelCost), 0)
  const totalWeeklyCosts = weeklyCosts.reduce((acc, weeklyCost) => acc + Number(weeklyCost.amount), 0)
  const totalNetProfit = totalEarnings - totalSessionCosts - totalWeeklyCosts
  const netEarningsPerHour = totalHoursWorked > 0 ? totalNetProfit / totalHoursWorked : 0
  const weekSessions = filterItemsByWeek(sessions, new Date())
  const currentWeekCosts = filterItemsByWeek(weeklyCosts, new Date())
  const weeklyEarnings = weekSessions.reduce((total, session) => total + Number(session.earnings), 0)
  const weeklyHours = weekSessions.reduce((total, session) => total + calculateHoursWorked(session.hoursFrom, session.hoursTo), 0)
  const weeklySessionCost = weekSessions.reduce((acc, session) => acc + Number(session.congestion) + Number(session.parking) + Number(session.fuelCost), 0)
  const weeklyTotalCosts = currentWeekCosts.reduce((total, weeklyCost) => total + Number(weeklyCost.amount), 0)
  const weeklyNetProfit = weeklyEarnings - weeklySessionCost - weeklyTotalCosts
  const filteredSessions = getFilteredSessions(sessions, filterMode, filterDate)
  const sortedSessions = getSortedSessions(filteredSessions, sortMode)

  const stats = {

    totalSessions: sessions.length,
    totalHoursWorked,
    totalEarnings,
    earningsPerHour,
    totalSessionCosts,
    totalWeeklyCosts,
    totalNetProfit,
    netEarningsPerHour,
    weeklyEarnings,
    weeklyHours,
    weeklySessionCost,
    weeklyTotalCosts,
    weeklyTotalCosts,
    weeklyNetProfit

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

  function updateWeeklyCost(updatedWeeklyCost) {
    setWeeklyCosts(prevWeeklyCosts =>
      prevWeeklyCosts.map((weeklyCost) =>
        weeklyCost.id === updatedWeeklyCost.id ? updatedWeeklyCost : weeklyCost)
    )
    setEditingWeeklyCostId(null)
  }

  function deleteSession(id) {
    setSessions(
      sessions.filter((session) => session.id !== id)
    );
    if (editingSessionId === id) {
      setEditingSessionId(null);
    }
  }
  function deleteWeeklyCost(id) {
    setWeeklyCosts(prevWeeklyCosts =>
      prevWeeklyCosts.filter((weeklyCost) => weeklyCost.id !== id)
    );
    if (editingWeeklyCostId === id) {
      setEditingWeeklyCostId(null);
    }
  }

  function startEditing(id) {
    setEditingSessionId(id);
  }
  function startEditingWeeklyCost(id) {
    setEditingWeeklyCostId(id)
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
      <SessionList sessions={sortedSessions}
        deleteSession={deleteSession}
        startEditing={startEditing}
        editingSessionId={editingSessionId}
        filterMode={filterMode}
        filterDate={filterDate}
        setFilterMode={setFilterMode}
        setFilterDate={setFilterDate}
        sortMode={sortMode}
        setSortMode={setSortMode} />
      <Stats stats={stats} />
      {editingSessionId !== null && (
        <EditSessionForm
          updateSession={updateSession}
          sessionToEdit={sessionToEdit}
        />
      )}
      {editingWeeklyCostId !== null && (
        <EditWeeklyCostForm
          updateWeeklyCost={updateWeeklyCost}
          weeklyCostToEdit={weeklyCostToEdit}
        />
      )}
      <WeeklyCostForm onAddWeeklyCost={addWeeklyCost} />
      <WeeklyCostList weeklyCosts={weeklyCosts}
        startEditingWeeklyCost={startEditingWeeklyCost}
        editingWeeklyCostId={editingWeeklyCostId}
        deleteWeeklyCost={deleteWeeklyCost} />
    </div>
  )
}

export default App