

function WeeklyCostList({ deleteWeeklyCost, weeklyCosts, startEditingWeeklyCost, editingWeeklyCostId }) {
    return (
        <div>
            <h2>Weekly Cost</h2>

            {weeklyCosts.map((weeklyCost) => {
                return (<div key={weeklyCost.id}>
                    <p>{weeklyCost.date} - {weeklyCost.type} - £{weeklyCost.amount}</p>
                    {editingWeeklyCostId === weeklyCost.id && <p>Editing...</p>}
                    <button onClick={() => startEditingWeeklyCost(weeklyCost.id)}>Edit</button>
                    <button onClick={() => deleteWeeklyCost(weeklyCost.id)}>Delete</button>
                </div>)
            })}
        </div>
    )

}

export default WeeklyCostList