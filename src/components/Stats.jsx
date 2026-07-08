
function Stats ({stats}) {
    return (
    <div>
        <h2>Stats</h2>
            <p>Total sessions: {stats.totalSessions}</p>
            <p>Total hours worked: {stats.totalHoursWorked.toFixed(2)}h</p>
            <p>Total earnings:£{stats.totalEarnings.toFixed(2)}</p>
            <p>Earnings per hour: £{stats.earningsPerHour.toFixed(2)}</p>
        
    </div>)
}


export default Stats