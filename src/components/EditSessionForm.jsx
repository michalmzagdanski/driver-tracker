import {useEffect, useState } from 'react'


function EditSessionForm({ updateSession, sessionToEdit }) {
    const [editingSession, setEditingSession] = useState(sessionToEdit)

    function handleChange(e) {
        setEditingSession({
            ...editingSession,
            [e.target.name]: e.target.value
        })
    }
    useEffect(() => {
        setEditingSession(sessionToEdit);
    }, [sessionToEdit]);

    function handleSave() {
        updateSession(editingSession);
    }
    return (
        <div>
            <h2>Edit Session</h2>
            <label>Date</label>
            <input type="date" value={editingSession.date} name="date" onChange={handleChange} />
            <select id="platform" value={editingSession.platform} name="platform" onChange={handleChange}>
                <option value="uber">Uber</option>
                <option value="bolt">Bolt</option>
                <option value="freenow">Freenow</option>
            </select>
            <label>HoursFrom</label>
            <input type="time" value={editingSession.hoursFrom} name="hoursFrom" onChange={handleChange} />
            <label>HoursTo</label>
            <input type="time" value={editingSession.hoursTo} name="hoursTo" onChange={handleChange} />
            <label>Trips</label>
            <input type="number" value={editingSession.trips} name="trips" onChange={handleChange} />
            <label>Earnings</label>
            <input type="number" value={editingSession.earnings} name="earnings" onChange={handleChange} />
            <label>Millage</label>
            <input type="number" value={editingSession.millage} name="millage" onChange={handleChange} />
            <label>Congestion</label>
            <input type="number" value={editingSession.congestion} name="congestion" onChange={handleChange} />
            <label>Parking</label>
            <input type="number" value={editingSession.parking} name="parking" onChange={handleChange} />
            <label>Fuel Cost</label>
            <input type="number" value={editingSession.fuelCost} name="fuelCost" onChange={handleChange}/>
            <button onClick={handleSave}>Save</button>
        </div>
    )
}
export default EditSessionForm