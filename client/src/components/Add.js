import React,{useState} from 'react'


// const routes = [{}];
var Bus;

const Add = () => {

    // add 
    // const [route,setRoute] = useState([{}]);
    const [busName,setBusName] = useState("");
    const [busNo,setBusNo] = useState("");
    const [stopage, setInputstopage] = useState([]);
    const [place,setPlace] = useState("");
    const [placeTime, setPlaceTime] = useState("");
    const [tougleButton,setTougleButton] = useState(true);


    // proceed 

    const proceed = ()=>{
        if(!busName || !busNo){
            alert("pleace fill Both the Fields.");
            setTougleButton(true);
        }else{
            Bus = {
                name:busName,
                number:busNo
            }

            setTougleButton(false);
        }
    }



    // add a route

    const addRoute = ()=>{
        if(!place || !placeTime){ // one of the field is empty
            alert("Please enter both Stopage and Time !");
        }
        else if(stopage.find((elem)=>{ return elem.placeTime===placeTime})){ // time repeating is there 
            alert("Bus can't be at two places at a same time ");
        }
        else{ //times are unique
            const newStopege = {
                place: place,
                placeTime : placeTime
            }
            setInputstopage([...stopage,newStopege]);
        }
        setPlace("");
        setPlaceTime("");
    }
   
    // console.log(stopage);


    // final submit
    const finalSubmit = ()=>{

        Bus.route = stopage;
        setBusName("");
        setBusNo("");
        //fix tougleButton
        setTougleButton("true");
        console.log(tougleButton);
        console.log(Bus);
    }



    return( 
        <>  
            <div className='add-container'>
                {   tougleButton?
                <div className='add-bus-name-time'>
                    <div>
                        <label htmlFor="bus-name">Bus Name : </label>
                        <input type='text' name='bus-name' id='bus-name' placeholder='Enter Bus Name' value={busName} onChange={(event)=>setBusName(event.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="bus-number">Bus Number :  </label>
                        <input type="text" name='bus-number' id='bus-number' placeholder='XX 00 X 1234' value={busNo} onChange={(event)=>setBusNo(event.target.value)} />
                    </div>
                    <button className='btn' onClick={proceed}>Proceed</button>
                </div>:
                <div className='timetable'>
                    <div className="routes">
                        <div className='routes-child'>
                            <label htmlFor="stopage">Stopage : </label>
                            <input type="text" name='place' id='stopage' placeholder='stopage' value={place} onChange={(event) => setPlace(event.target.value)}/>
                        </div>
                        <div className='routes-child'>
                            <label htmlFor="stopage-time">Time : </label>
                            <input type="time" name='stopage-time' id='stopage-time' value={placeTime} onChange={(event) => setPlaceTime(event.target.value)}/>
                        </div>
                        <button className='btn add routes-child' onClick={addRoute}>+</button>
                    </div>

                    {/* show stopages with time tag need to modify later IT IS NOT WORKING */}
                    <div className="stopages-with-time">
                        {
                        stopage.map((curElem)=>{
                            return(
                                <div className="each-stop">
                                <div> {curElem.place}</div><div>{curElem.placeTime}</div>
                            </div>
                            )
                        })
                        }
                    </div>
                    <button className='btn submit' onClick={finalSubmit} >Submit</button>
                </div>
                }
            </div>
        </>
    )
}

export default Add