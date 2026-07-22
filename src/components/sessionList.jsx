import { useState } from 'react'
import { calculateHoursWorked,  } from '../utils/helpers'

function SessionList({ sessions,
    deleteSession,
    startEditing,
    editingSessionId,
    filterMode,
    filterDate,
    setFilterMode,
    setFilterDate,
    sortMode,
    setSortMode
}) {


    return (

        <div>
            <div>
                <span>Filter By:</span>
                <button onClick={() => setFilterMode("all")} className={filterMode === "all" ? "active" : ""}>All</button>
                <button onClick={() => setFilterMode("day")} className={filterMode === "day" ? "active" : ""}>Day</button>
                <button onClick={() => setFilterMode("week")} className={filterMode === "week" ? "active" : ''}>Week</button>
                {(filterMode === "day" || filterMode === "week") &&
                    <input
                        type="date"
                        value={filterDate}
                        onChange={(e) => setFilterDate(e.target.value)} />
                }            </div>
                <div>
                    <span>Sort By:</span>
                    <select value={sortMode} onChange={(e) => setSortMode(e.target.value)}>
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                        <option value="highestEarnings">Highest Earnings</option>
                        <option value="lowestEarnings">Lowest Earnings</option>
                        <option value="highestNetProfit">Highest Net Profit</option>
                        <option value="lowestNetProfit">Lowest Net Profit</option>
                    </select>
                </div>
            <h2>Sessions</h2>

            {sessions.map((session) => {

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