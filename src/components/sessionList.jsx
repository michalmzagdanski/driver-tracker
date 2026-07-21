import { useState } from 'react'
import { calculateHoursWorked, getFilteredSessions } from '../utils/helpers'

function SessionList({ sessions,
    deleteSession,
    startEditing,
    editingSessionId,
    filterMode,
    filterDate,
    setFilterMode,
    setFilterDate
     }) {
        const filteredSessions = getFilteredSessions(
  sessions,
  filterMode,
  filterDate
)
        

    return (
        
        <div>
            <div>
                <button onClick={() => setFilterMode("all")} className={filterMode === "all" ? "active" : ""}>All</button>
                <button onClick={() => setFilterMode("day")} className={filterMode === "day" ? "active" : ""}>Day</button>
                <button onClick={() => setFilterMode("week")} className={filterMode === "week" ? "active" : ''}>Week</button>
                {(filterMode === "day" || filterMode === "week") &&
                    <input
                        type="date"
                        value={filterDate}
                        onChange={(e) => setFilterDate(e.target.value)} />
                }            </div>
            <h2>Sessions</h2>

            {filteredSessions.map((session) => {

                const hoursWorked = calculateHoursWorked(
                    session.hoursFrom,
                    session.hoursTo

                );

                return <div key={session.id}>
                    <p>{session.date} - {session.platform} -  {hoursWorked.toFixed(2)}h - £{session.earnings}</p>
                    {editingSessionId === session.id && <p>Editing...</p>}
                    <button onClick={() => deleteSession(session.id)}>Delete</button>
                    <button onClick={() => startEditing(session.id)}>Edit</button>
                </div>
            })}
        </div>

    )
}

export default SessionList