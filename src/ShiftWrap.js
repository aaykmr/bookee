import {useState} from "react";
import Dates from './Dates';
function ShiftWrap(props){
    //console.log(props);
    /*const [data, setData] = useState('');
    async function getData(){
    let response = await fetch("http://localhost:8080/shifts");
    setData(response);
    }*/
    
    
    
    
    return(
        <div id={props.tab} style={{display:props.display}} className="tabcontent">
            <Dates tab={props.tab} state={props.state} fetchData={props.fetchData} this={props.this}/>
        </div>
    )
}
export default ShiftWrap;