import {useEffect, useState } from 'react'

function EditWeeklyCostForm({ weeklyCostToEdit, updateWeeklyCost }) {
    const [editingWeeklyCost, setEditingWeeklyCost] = useState(weeklyCostToEdit)

    function handleChange(e) {
        setEditingWeeklyCost({
            ...editingWeeklyCost,
            [e.target.name]: e.target.value
        })
    }
    useEffect(() => {
        setEditingWeeklyCost(weeklyCostToEdit);
    }, [weeklyCostToEdit]);

    function handleSave() {
        updateWeeklyCost(editingWeeklyCost)
    }
    return (
        <div>
            <h2>Edit Weekly Cost</h2>
            <label>Date</label>
            <input type="date" value={editingWeeklyCost.date} name="date" onChange={handleChange} />
            <select id="type" value={editingWeeklyCost.type} name="type" onChange={handleChange}>
                <option value="carRent">Car Rent</option>
                <option value="carWash">Car Wash</option>
                <option value="fine">Fine</option>
                <option value="other">Other</option>
            </select>
            <label>Amount</label>
            <input type="number" value={editingWeeklyCost.amount} name="amount" onChange={handleChange} />
            <button onClick={handleSave}>Save</button>
        </div>
    )

}
export default EditWeeklyCostForm