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
        congestion: '',
        parking: '',
        fuelCost: ''

    })
    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    function addSession() {
        if (!formData.hoursFrom || !formData.hoursTo || !formData.date || !formData.earnings || !formData.millage || !formData.congestion || !formData.parking || !formData.fuelCost) {
            return;
        }
        const newSession = {
            id: crypto.randomUUID(),
            ...formData
        }

        onAddSession(newSession);
        setFormData({
            date: "",
            platform: "Uber",
            hoursFrom: "",
            hoursTo: "",
            trips: "",
            earnings: "",
            millage: "",
            congestion: "",
            parking: "",
            fuelCost: ""
        });
    }

    return (
        <div>
            <h2>Add Session</h2>
            <label>Date</label>
            <input type="date" value={formData.date} name="date" onChange={handleChange} />
            <select id="platform" value={formData.platform} name="platform" onChange={handleChange}>
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
            <label>Congestion</label>
            <input type="number" value={formData.congestion} name="congestion" onChange={handleChange} />
            <label>Parking</label>
            <input type="number" value={formData.parking} name="parking" onChange={handleChange}/>
            <label>Fuel Cost</label>
            <input type ="number" value={formData.fuelCost} name="fuelCost" onChange={handleChange}/>
            <button onClick={addSession}>Add session</button>



        </div>
    )
}

export default SessionForm