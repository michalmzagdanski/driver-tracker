
function Stats({ stats }) {
    return (
        <div>
            <h2>Stats</h2>
            <h3>All Time Gross</h3>
            <p>Total sessions: {stats.totalSessions}</p>
            <p>Total hours worked: {stats.totalHoursWorked.toFixed(2)}h</p>
            <p>Total earnings:£{stats.totalEarnings.toFixed(2)}</p>
            <p>Earnings per hour: £{stats.earningsPerHour.toFixed(2)}</p>
            <h3>All Time Net</h3>
            <p>Session Costs: £{stats.totalSessionCosts}</p>
            <p>Weekly Costs: £{stats.totalWeeklyCosts}</p>
            <p>Net Profit: £{stats.totalNetProfit}</p>
            <p>Net Earnings Per Hour: £{stats.netEarningsPerHour.toFixed(2)}</p>
            <h3>This Week</h3>
            <p>Weekly Hours: {stats.weeklyHours.toFixed(2)}h</p>
            <p>Weekly Earnings: £{stats.weeklyEarnings.toFixed(2)}</p>
            <p>Weekly Session Costs: £{stats.weeklySessionCost.toFixed(2)}</p>
            <p>Weekly Total Costs: £{stats.weeklyTotalCosts.toFixed(2)}</p>
            <p>Weekly Net Profit: £{stats.weeklyNetProfit.toFixed(2)}</p>

        </div>)
}


export default Stats