import { useState } from 'react'


function SessionForm({ onAddSession }) {
    const [formData, setFormData] = useState({
        date: '',
        platform: 'Uber',
        hoursFrom: '',
        hoursTo: '',
        trips: '',
        earnings: '',
        millage: '',
        consumption: ''

    })
    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    function addSession() {
        const newSession = {
            id: crypto.randomUUID(),
            ...formData
        }

        onAddSession(newSession)
    }

    return (
        <div>
            <h2>Add Session</h2>
            <label>Date</label>
            <input type="date" value={formData.date} name="date" onChange={handleChange} />
            <select id="Platform" value={formData.platform} name="platform" onChange={handleChange}>
                <option value="uber">Uber</option>
                <option value="bolt">Bolt</option>
                <option value="freenow">Freenow</option>
            </select>
            <label>HoursFrom</label>
            <input type="time" value={formData.hoursFrom} name="hoursFrom" onChange={handleChange} />
            <label>HoursTo</label>
            <input type="time" value={formData.hoursTo} name="hoursTo" onChange={handleChange} />
            <label>Trips</label>
            <input type="number" value={formData.trips} name="trips" onChange={handleChange} />
            <label>Earnings</label>
            <input type="number" value={formData.earnings} name="earnings" onChange={handleChange} />
            <label>Millage</label>
            <input type="number" value={formData.millage} name="millage" onChange={handleChange} />
            <label>Consumption</label>
            <input type="number" value={formData.consumption} name="consumption" onChange={handleChange} />
            <button onClick={addSession}>Add session</button>



        </div>
    )
}

export default SessionForm