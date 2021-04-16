
function Tabs(){
    return(
        <div className="tabs">
            <div className="tab">
            <button className="tablinks" id="London" onClick={(e) => openCity('London',e)}>London</button>
            <button className="tablinks" id="Paris" onClick={(e) => openCity('Paris',e)}>Paris</button>
            <button className="tablinks" id="Tokyo" onClick={(e) => openCity('Tokyo',e)}>Tokyo</button>
            </div>

            
            <div id="London" className="tabcontent">
            <h3>London</h3>
            <p>London is the capital city of England.</p>
            </div>

            <div id="Paris" className="tabcontent">
            <h3>Paris</h3>
            <p>Paris is the capital of France.</p>
            </div>

            <div id="Tokyo" className="tabcontent">
            <h3>Tokyo</h3>
            <p>Tokyo is the capital of Japan.</p>
            </div>
        </div>

    )
}

function openCity(cityName,evt) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    //console.log(evt);
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

export default Tabs;