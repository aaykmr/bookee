

function Shift(props){
    var response=[];
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
    console.log(props.booked.startTime);

    const cancelBook = e => {
        e.preventDefault();
        if(e.currentTarget.className!='cancel disabled'){
            console.log(e.currentTarget.id);
            
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
                
            };

            fetch("http://localhost:8080/shifts/"+e.currentTarget.id+"/cancel",requestOptions)
            .then(response => console.log(response))
            .then(data => {props.fetchData(props.this)})
        
        }
        
    }
    const book = e => {
        e.preventDefault();
        if(e.currentTarget.className!='book bookDisabled'){
            console.log(e.currentTarget.id);

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
                
            };

            fetch("http://localhost:8080/shifts/"+e.currentTarget.id+"/book",requestOptions)
            .then(response => {
                if(response.status===400){
                    console.log(response.status);
                    document.getElementById(e.target.id+"btn").style.display="block";
                    document.getElementById(e.target.id).className="book bookDisabled";
                    setTimeout(reset,4000);
                    function reset(){
                        document.getElementById(e.target.id+"btn").style.display="none";
                        document.getElementById(e.target.id).className="book";
                    }
                }
            })
            .then(data => {
                props.fetchData(props.this);
                

            })
            .catch(err => {
                console.log("err "+err);
            }
            )
        }
    }

    function GetSortOrder(prop) {    
        return function(a, b) {    
            if (a[prop] > b[prop]) {    
                return 1;    
            } else if (a[prop] < b[prop]) {    
                return -1;    
            }    
            return 0;    
        }    
    }   
    

    props.booked.sort(GetSortOrder("startTime")).map((ele) => {
        if(month[new Date(ele.startTime).getMonth()]+" "+new Date(ele.startTime).getDate()===props.date && (ele.area===props.loc && props.tab==="available" || props.tab==="my")){
            response.push(

                <div className="shift" key={ele.id} >
                
                    {new Date(ele.startTime).getHours()}:{new Date(ele.startTime).getMinutes()}-{new Date(ele.endTime).getHours()}:{new Date(ele.endTime).getMinutes()}
                    <br></br>
                    <div style={{color: "#525d6d", fontSize:"15px", float:'left'}}>{ele.area}</div>
                   
                    
                    {
                        ele.booked ===true?<button id={ele.id} onClick={cancelBook} className={new Date()>ele.startTime?"cancel disabled":"cancel"}>Cancel</button>:<button id={ele.id} onClick={book} className={new Date()>ele.startTime?"book bookDisabled":"book"}>Book</button>
                    }
                    {   
                        props.tab==="available"?ele.booked ===true?<button className="check">Booked</button>:"":""
                    } 
                    {
                        props.tab==="available"?<button id= {ele.id+"btn"} className="cancel overlap">Overlapping</button>:""
                    }
                        
                </div>

            );
        }
    })



    console.log(response)
    return(
        <div>{response}</div>
            
        /*props.booked.map((ele) => (
            
                <div className="shift" key={ele.id} >
                
                    {new Date(ele.startTime).getHours()}:{new Date(ele.startTime).getMinutes()}-{new Date(ele.endTime).getHours()}:{new Date(ele.endTime).getMinutes()}
                    <br></br>
                    <div style={{color: "#525d6d", fontSize:"15px", float:'left'}}>{ele.area}</div>
                    
                    <button className="cancel">Cancel</button>
                </div>
            
        ))*/
    )
    
}



export default Shift;