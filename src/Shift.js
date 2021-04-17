import {useState} from 'react';

function Shift(props){
    console.log(props.state.state);
    
    
    let [shift,setShift]=useState("");

    let response = Object.keys(props.state.state).map((key) => [Number(key), props.state.state[key]][1]);
    let booked=[];
    const dates = new Set() 
    response.forEach(element => {
        if(!element.booked){
            booked.push(
                element
            );
        }
        
        dates.add(element.days);
    });
    let days=[];
    console.log(dates);
    dates.forEach(element => {
        days.push(
            
        )
    });


    return(
        <div className="shiftContainer">{
            booked.map((element) => (
                <div className="shift" key={element.id} >
                    <div style={{float:'left'}}>
                        {new Date(element.startTime).getHours()}:{new Date(element.startTime).getMinutes()}-{new Date(element.endTime).getHours()}:{new Date(element.endTime).getMinutes()}
                        <br></br>
                        <div style={{color: "#525d6d", fontSize:"15px", float:'left'}}>{element.area}</div>
                    </div>
                    <button className="cancel">Cancel</button>
                </div>
            ))

            }    
        </div>
    )

}
export default Shift;