import ShiftWrap from "./ShiftWrap";
function Tabs(props){
    
    return(
        <div className="tabs">
            <div className="tab">
                <button className="tablinks" id="defaultOpen" style={{color:"black"}} onClick={(e) => openTab('my',e)}>My shifts</button>
                <button className="tablinks"  onClick={(e) => openTab('available',e)}>Available shifts</button>
            </div>

            
            
            <ShiftWrap tab={"my"} display={"block"} state={props} fetchData={props.fetchData} this={props.this}/>
            <ShiftWrap tab={"available"} display={"none"} state={props} fetchData={props.fetchData} this={props.this}/>
            
            
            
        </div>

    )
}

function openTab(tabName,evt) {
   
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
        tablinks[i].style.color = "#888888";
        
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
    document.getElementsByClassName("active")[0].style.color="black";
}

export default Tabs;