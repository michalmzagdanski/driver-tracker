

function WeeklyCostList ({weeklyCosts}) {
return (
    <div>
        <h2>Weekly Cost</h2>

        {weeklyCosts.map((weeklyCost) => {
            return(<div key={weeklyCost.id}>
                <p>{weeklyCost.date} - {weeklyCost.type} - £{weeklyCost.amount}</p>
        </div>)
        })}
    </div>
)
    
}

export default WeeklyCostList