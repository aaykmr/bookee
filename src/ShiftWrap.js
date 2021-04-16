import {useState} from "react"
function ShiftWrap(props){
    //console.log(props);
    /*const [data, setData] = useState('');
    async function getData(){
    let response = await fetch("http://localhost:8080/shifts");
    setData(response);
    }*/
    
    
    
    
    return(
        <div id={props.tab} style={{display:props.display}} className="tabcontent">
            <h3>{props.tab}</h3>
            <p>London is the capital city of England.</p>
        </div>
    )
}
export default ShiftWrap;