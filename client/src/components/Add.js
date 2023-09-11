import React from 'react'

const Add = () => {
    return (
        <>
            <div className='add-container'>
                <div className='add-bus-name-time'>
                    <input type='text' placeholder='Enter Bus Name' />
                    <span>Proceed</span>
                </div>
                <div className='add-form'>
                    <form> <label for="fname">First name:</label>
                        <input type="text" id="fname" name="fname" />
                        <label for="lname">Last name:</label>
                        <input type="text" id="lname" name="lname" />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <div className='add-bus'>
                    <div className='add-bus-name'>
                    </div>
                    <div className='add-bus-time'>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Add