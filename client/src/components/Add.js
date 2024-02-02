import React, { useState } from 'react';

const Add = () => {
    const [busName, setBusName] = useState('');
    const [busNumber, setBusNumber] = useState('');
    const [route1, setRoute1] = useState([]);
    const [route2, setRoute2] = useState([]);
    const [runningDays, setRunningDays] = useState([]);
    const [tougleButton, setTougleButton] = useState(true);
    const [tougleButton1, setTougleButton1] = useState(true);
    const [tougleButton2, setTougleButton2] = useState(true);
    const [tougleButton3, setTougleButton3] = useState(true);

    const handleAddRoute1 = () => {
        // Handle adding a new stop to route1
        // For simplicity, assume place and time are input via separate input fields
        const newStop = {
            place: document.getElementById('route1-place').value,
            time: document.getElementById('route1-time').value,
        };

        setRoute1([...route1, newStop]);
    };

    const handleAddRoute2 = () => {
        // Handle adding a new stop to route2
        // For simplicity, assume place and time are input via separate input fields
        const newStop = {
            place: document.getElementById('route2-place').value,
            time: document.getElementById('route2-time').value,
        };

        setRoute2([...route2, newStop]);
    };

    // const handleAddRunningDay = () => {
    //     // Handle adding a new running day
    //     // For simplicity, assume day and routes are input via separate input fields
    //     // setTougleButton3(false);
    //     const newRunningDay = {
    //         day: document.getElementById('running-day').value,
    //         routes: document.getElementById('running-day-routes').value.split(',').map(route => route.trim()),
    //     };

    //     setRunningDays([...runningDays, newRunningDay]);
    // };

    function handleAddRunningDay() {
        setTougleButton3(false);
        const selectedDays = [];

        // Array of all possible days
        const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saterday'];

        // Iterate through each day
        days.forEach((day) => {
            const dayRoutes = [];

            // Find all checked checkboxes for the current day
            const checkboxes = document.querySelectorAll(`input[name="${day}"]:checked`);

            // Push the value (route) of each checked checkbox into dayRoutes
            checkboxes.forEach((checkbox) => {
                dayRoutes.push(checkbox.value);
            });

            // If there are selected routes for the day, add it to selectedDays array
            if (dayRoutes.length > 0) {
                selectedDays.push({ day, routes: dayRoutes });
            }
        });

        // Do something with the selectedDays array, for example, log it to the console
        console.log(selectedDays);
        setRunningDays(selectedDays);
    };

    const handleAddBus = async () => {
        try {
            // Perform validation before sending the request
            // You might want to add more validation checks

            const response = await fetch('/addbus', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: busName,
                    number: busNumber,
                    route1,
                    route2,
                    running_days: runningDays,
                }),
            });

            const result = await response.json();

            if (result.message) {
                alert(result.message);
                // Optionally, reset form fields after successful addition
                setBusName('');
                setBusNumber('');
                setRoute1([]);
                setRoute2([]);
                setRunningDays([]);
            } else {
                alert('Failed to add bus. Please check the console for errors.');
            }
        } catch (error) {
            console.error('Error adding bus:', error);
            alert('An error occurred while adding the bus.');
        }
    };

    return (
        <div>
            <h2>Add Bus</h2>
            {tougleButton ?
                <div>
                    <label>Bus Name: বাস<input type="text" value={busName} onChange={(e) => setBusName(e.target.value)} /></label><br />
                    <label>Bus Number: <input type="text" value={busNumber} onChange={(e) => setBusNumber(e.target.value)} /></label><br />
                    <button onClick={() => setTougleButton(false)}>proceed</button>
                </div>
                :
                <div>
                    {tougleButton1 ?
                        <div>
                            <h3>Route 1</h3>
                            <label>Place: <input type="text" id="route1-place" /></label>
                            <label>Time: <input type="text" id="route1-time" /></label>
                            <button onClick={handleAddRoute1}>Add Stop</button>
                            <ul>
                                {route1.map((stop, index) => (
                                    <li key={index}>{stop.place} - {stop.time}</li>
                                ))}
                            </ul>
                            <button onClick={() => setTougleButton1(false)}>proceed</button>
                        </div>
                        :
                        <div>
                            {tougleButton2 ?
                                <div>

                                    <h3>Route 2</h3>
                                    <label>Place: <input type="text" id="route2-place" /></label>
                                    <label>Time: <input type="text" id="route2-time" /></label>
                                    <button onClick={handleAddRoute2}>Add Stop</button>
                                    <ul>
                                        {route2.map((stop, index) => (
                                            <li key={index}>{stop.place} - {stop.time}</li>
                                        ))}
                                    </ul>
                                    <button onClick={() => setTougleButton2(false)}>proceed</button>
                                </div>
                                :
                                <div>
                                    {tougleButton3 ?
                                        <div>

                                            <h3>Running Days</h3>

                                            <h3>Choose Bus Running on Sunday</h3>
                                            <label>
                                                <input type="checkbox" name="sunday" value="route1" /> Route 1
                                            </label>
                                            <label>
                                                <input type="checkbox" name="sunday" value="route2" /> Route 2
                                            </label>

                                            <h3>Choose Bus Running on Monday</h3>
                                            <label>
                                                <input type="checkbox" name="monday" value="route1" /> Route 1
                                            </label>
                                            <label>
                                                <input type="checkbox" name="monday" value="route2" /> Route 2
                                            </label>

                                            <h3>Choose Bus Running on Tuesday</h3>
                                            <label>
                                                <input type="checkbox" name="tuesday" value="route1" /> Route 1
                                            </label>
                                            <label>
                                                <input type="checkbox" name="tuesday" value="route2" /> Route 2
                                            </label>

                                            <h3>Choose Bus Running on Wednesday</h3>
                                            <label>
                                                <input type="checkbox" name="wednesday" value="route1" /> Route 1
                                            </label>
                                            <label>
                                                <input type="checkbox" name="wednesday" value="route2" /> Route 2
                                            </label>

                                            <h3>Choose Bus Running on Thursday</h3>
                                            <label>
                                                <input type="checkbox" name="thursday" value="route1" /> Route 1
                                            </label>
                                            <label>
                                                <input type="checkbox" name="thursday" value="route2" /> Route 2
                                            </label>

                                            <h3>Choose Bus Running on Friday</h3>
                                            <label>
                                                <input type="checkbox" name="friday" value="route1" /> Route 1
                                            </label>
                                            <label>
                                                <input type="checkbox" name="friday" value="route2" /> Route 2
                                            </label>

                                            <h3>Choose Bus Running on Saterday</h3>
                                            <label>
                                                <input type="checkbox" name="saterday" value="route1" /> Route 1
                                            </label>
                                            <label>
                                                <input type="checkbox" name="saterday" value="route2" /> Route 2
                                            </label>
                                            <button onClick={handleAddRunningDay}>Proceed</button>
                                        </div>
                                        :
                                        <div>
                                            <button onClick={handleAddBus}>Add B</button>
                                        </div>}
                                </div>}
                        </div>}
                </div>}
        </div>
    );
};

export default Add;