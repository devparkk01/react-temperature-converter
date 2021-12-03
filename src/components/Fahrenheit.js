import React from "react" ;

const Fahrenheit = (props) =>{
    return (
        <div>
            <label>Temp in F </label> <br />
            <input type = "text"  value = {props.temp} ></input>
        </div>
    )
}

export default Fahrenheit ; 