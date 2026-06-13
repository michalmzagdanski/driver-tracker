import { useState } from 'react'

function SessionList({ sessions }) {
    function calculateHoursWorked(hoursFrom, hoursTo) {
        const startParts = hoursFrom.split(":");
        const endParts = hoursTo.split(":");
        const startHours = Number(startParts[0]);
        const startMinutes = Number(startParts[1]);

        const endHours = Number(endParts[0]);
        const endMinutes = Number(endParts[1]);
        const startMinutesFromMidnight =
            startHours * 60 + startMinutes;
        const endMinutesFromMidnight =
            endHours * 60 + endMinutes;
        const totalWorkedMinutes =
            endMinutesFromMidnight - startMinutesFromMidnight;
        const hoursWorked = totalWorkedMinutes / 60;
        return hoursWorked;
    }
    console.log("SessionList render", sessions);
    return (
        <div>
            <h2>Sessions</h2>

            {sessions.map((session) => {
                const hoursWorked = calculateHoursWorked(
                    session.hoursFrom,
                    session.hoursTo

                );

                return <div key={session.id}>
                    <p>{session.date} - {session.platform} -{hoursWorked}h - £{session.earnings}</p>
                </div>
            })}
        </div>

    )
}

export default SessionList