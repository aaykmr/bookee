import ShiftWrap from "./ShiftWrap";
function Tabs(){
    return(
        <div className="tabs">
            <div className="tab">
                <button className="tablinks" id="defaultOpen" style={{color:"black"}} onClick={(e) => openTab('my',e)}>My shifts</button>
                <button className="tablinks"  onClick={(e) => openTab('available',e)}>Available shifts</button>
            </div>

            
            <div id="my" style={{display:"block"}} className="tabcontent">
            <h3>London</h3>
            <p>London is the capital city of England.</p>
            </div>
            <ShiftWrap tab={"my"}/>
            <ShiftWrap tab={"available"} />
            <div id="available" className="tabcontent">
            <h3>Paris</h3>
            <p>Paris is the capital of France.</p>
            </div>
            
            
        </div>

    )
}

function openTab(cityName,evt) {
   
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
    //console.log(evt);
    document.getElementById(cityName).style.display = "block";
    //document.getElementsByClassName("active")[0].style.color="black";
    evt.currentTarget.className += " active";
    
    document.getElementsByClassName("active")[0].style.color="black";
}

export default Tabs;