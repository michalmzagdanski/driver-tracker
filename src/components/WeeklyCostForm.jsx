import { useState } from 'react'

function WeeklyCostForm({onAddWeeklyCost}) {
    const [weeklyCost, setWeeklyCost] = useState({
        date: "",
        type: "Car Rent",
        amount: ""
    })


    function handleChange(e) {
        setWeeklyCost({
            ...weeklyCost,
            [e.target.name]: e.target.value
        })
    }
    function addWeeklyCost() {

        if (!weeklyCost.date || !weeklyCost.type || !weeklyCost.amount) {
            return;
        }

        const newWeeklyCost = {
            id: crypto.randomUUID(),
            ...weeklyCost
        }
        onAddWeeklyCost(newWeeklyCost);
        setWeeklyCost({
            date: "",
            type: "",
            amount: ""
        });
    }
    return (
        <div>
            <h2>Add Weekly Cost</h2>
            <label>Date</label>
            <input type="date" value={weeklyCost.date} name="date" onChange={handleChange} />
            <select id="type" value={weeklyCost.type} name="type" onChange={handleChange}>
            <option value="carRent">Car Rent</option>
            <option value="carWash">Car Wash</option>
            <option value="fine">Fine</option>
            <option value="other">Other</option>
            </select>
            <label>Amount</label>
            <input type="number" value={weeklyCost.amount} name="amount" onChange={handleChange} />
            <button onClick={addWeeklyCost}>Add Weekly Cost</button>
        </div>
    )

}

export default WeeklyCostForm
