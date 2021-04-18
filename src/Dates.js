import {useState} from 'react';
import Shift from './Shift'
function Dates(props){
    console.log(props.state.state);
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    
    let [shift,setShift]=useState("");

    let response = Object.keys(props.state.state).map((key) => [Number(key), props.state.state[key]][1]);
    let booked=[];
    
    const dates = new Set() 
    const locations = new Set()
    response.forEach(element => {
        if(props.tab==="my"){
            
            if(element.booked){
                
                booked.push(
                    element
                );

                dates.add(month[new Date(element.startTime).getMonth()]+" "+new Date(element.startTime).getDate());
                locations.add(element.area);

            }
            
        }
        else{
            booked.push(
                element
            );
            dates.add(month[new Date(element.startTime).getMonth()]+" "+new Date(element.startTime).getDate());
            locations.add(element.area);
        }
    });
    let days=[];
    let areas=[];
    //console.log(locations);
    locations.forEach(element => {
        areas.push(
            element
        )
    });


    //console.log(dates);
    dates.forEach(element => {
        days.push(
            element
        )
    });
    const [loc,setLoc]=useState('');
    const handleLoc = e =>{
        e.preventDefault();
        console.log(e.currentTarget.innerText);
        setLoc(e.currentTarget.innerText);
    };
   

    return(
        <div className="shiftContainer">
            <div className="areas">
            { props.tab==="available"?
                areas.map((element) => (
                    <div className="area" onClick={handleLoc}>{
                        element}
                                    
                    </div>
                )):""
            }
            </div>
            {
                days.map((element) => (
                    <div className="dates">{
                        element}
                        <Shift booked={booked} date={element} tab={props.tab} fetchData={props.fetchData} state={props.state} this={props.this} loc={loc}/>              
                    </div>
                     
                ))
            }
        </div>
    )


    /*return(
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
    )*/

}
export default Dates;