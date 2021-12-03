import React from "react" ;

const Celsius = (props) =>{
    const celsiusInputHandler = (event ) => {
        // console.log(event.target.value ) ; 
        props.onSelectTemp(event.target.value) ; 

    }

    return (
        <div>
            <label>Temp in C </label> <br /> 
            <input type = "text" onChange = {celsiusInputHandler}></input>
        </div>
    )
}

export default Celsius ; 