import { useState } from 'react'


function Dashboard({ sessions }) {
    return (
        <div>
            <h2>Dashboard</h2>
            <p>Total sessions: {sessions.length}</p>
            {sessions.map((session, index) => (
                <div key={session.id}>
                    <p>{session.date} - {session.platform} - £{session.earnings}</p>
                </div>
            ))}
        </div>

    )
}

export default Dashboard