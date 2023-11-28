import React,{useState,useEffect} from 'react'


// const routes = [{}];
var Bus;

const Add = () => {

    // add 
    // const [route,setRoute] = useState([{}]);
    const [busName,setBusName] = useState("");
    const [busNo,setBusNo] = useState("");
    const [stopage, setInputstopage] = useState([]);
    const [place,setPlace] = useState("");
    const [time, setTime] = useState("");
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
        if(!place || !time){ // one of the field is empty
            alert("Please enter both Stopage and Time !");
        }
        else if(stopage.find((elem)=>{ return elem.time===time})){ // time repeating is there 
            alert("Bus can't be at two places at a same time ");
        }
        else{ //times are unique
            const newStopege = {
                place: place,
                time : time
            }
            setInputstopage([...stopage,newStopege]);
        }
        setPlace("");
        setTime("");
    }
   
    // console.log(stopage);



    // editStopage

    const editStopage = (curElem)=>{
        setPlace(curElem.place);
        setTime(curElem.time);

    }


    // final submit
    const finalSubmit = async(e)=>{

        Bus.route = stopage;
        console.log(stopage);
        setBusName("");
        setBusNo("");
        //fix tougleButton
        setTougleButton("true");
        console.log(tougleButton);


        e.preventDefault();
        const res = await fetch('/addbus',{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            name:busName,number:busNo,route:stopage
          })
        });


        const result = await res.json();
        
        
        if(result.status === 422 || !result){
          window.alert("cant do that");
          console.log("cant do that");
        }else{
            console.log("added successfully");

        }
    }

    // adding to local storage

  useEffect(()=>{
    localStorage.setItem("route",JSON.stringify(stopage))
  },[stopage]);

// 

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
                            <input type="time" name='stopage-time' id='stopage-time' value={time} onChange={(event) => setTime(event.target.value)}/>
                        </div>
                        <button className='btn add routes-child' onClick={addRoute}>+</button>
                    </div>

                    {/* show stopages with time tag need to modify later IT IS NOT WORKING */}
                    <div className="stopages-with-time">
                        {
                        stopage.map((curElem)=>{
                            return(
                                <div className="each-stop" id='each-stop' onClick={()=>{editStopage(curElem)}}>
                                    <span> {curElem.place}</span>
                                    <span>{curElem.time}</span>
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