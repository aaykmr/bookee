import {useState} from "react";
import Shift from './Shift';
function ShiftWrap(props){
    //console.log(props);
    /*const [data, setData] = useState('');
    async function getData(){
    let response = await fetch("http://localhost:8080/shifts");
    setData(response);
    }*/
    
    
    
    
    return(
        <div id={props.tab} style={{display:props.display}} className="tabcontent">
            <Shift tab={props.tab} state={props.state}/>
        </div>
    )
}
export default ShiftWrap;