import { useState } from 'react'


function Stats({ stats }) {
    return (
        <div>
            <h2>Stats</h2>

            <p>Total sessions: {stats.totalSessions}</p>
        </div>
    )
}





export default Stats