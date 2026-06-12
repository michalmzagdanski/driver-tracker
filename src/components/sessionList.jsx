import { useState } from 'react'

function SessionList({ sessions }) {
    return (
        <div>
            <h2>Sessions</h2>

            {sessions.map((session) => (
                <div key={session.id}>
                    <p>{session.date} - {session.platform} - £{session.earnings}</p>
                </div>
            ))}
        </div>

    )
}

export default SessionList