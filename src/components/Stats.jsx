
function Stats({ stats }) {
    return (
        <div>
            <h2>Stats</h2>
            <h3>Gross</h3>
            <p>Total sessions: {stats.totalSessions}</p>
            <p>Total hours worked: {stats.totalHoursWorked.toFixed(2)}h</p>
            <p>Total earnings:£{stats.totalEarnings.toFixed(2)}</p>
            <p>Earnings per hour: £{stats.earningsPerHour.toFixed(2)}</p>
            <h3>Net</h3>
            <p>Session Costs: £{stats.totalSessionCosts}</p>
            <p>Weekly Costs: £{stats.totalWeeklyCosts}</p>
            <p>Net Profit: £{stats.totalNetProfit}</p>
            <p>Net Earnings Per Hour: £{stats.netEarningsPerHour.toFixed(2)}</p>
        </div>)
}


export default Stats