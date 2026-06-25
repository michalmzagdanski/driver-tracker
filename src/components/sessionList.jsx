import { useState } from 'react'
import { calculateHoursWorked } from '../utils/helpers'

function SessionList({ sessions, deleteSession }) {

    return (
        <div>
            <h2>Sessions</h2>

            {sessions.map((session) => {

                const hoursWorked = calculateHoursWorked(
                    session.hoursFrom,
                    session.hoursTo

                );

                return <div key={session.id}>
                    <p>{session.date} - {session.platform} -  {hoursWorked.toFixed(2)}h - £{session.earnings}</p>
                    <button onClick={() => deleteSession(session.id)}>
                        Delete
                    </button>
                </div>
            })}
        </div>

    )
}

export default SessionList