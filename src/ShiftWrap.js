
function ShiftWrap(props){
    console.log(props);
    return(
        <div id={props.tab} style={{display:"block"}} className="tabcontent">
            <h3>London</h3>
            <p>London is the capital city of England.</p>
        </div>
    )
}
export default ShiftWrap;