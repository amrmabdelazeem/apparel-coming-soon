import React, { useState } from "react";


function Input(){
    //use state hook to store value entered in input
    const [inputVal, setInputVal] = useState("");

    function handleInput(event){
        const value = event.target.value;
        setInputVal(value);
    }
    //Form validation with DOM
    function handleClick(e){
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(inputVal.match(validRegex)){
            document.getElementById("inputField").style.border="2px solid #ce9797";
            document.getElementById("inputField").style.background="none";
            document.getElementById("error").style.visibility = "hidden";

        }else{
            if(window.innerWidth > 1300){
                document.getElementById("inputField").style.border="2px solid red";
                document.getElementById("inputField").style.background ="url(images/icon-error.svg) no-repeat 18rem";
                document.getElementById("inputField").style.opacity = "1";
                document.getElementById("error").style.visibility = "visible";
            }
            else{
                document.getElementById("inputField").style.border="2px solid red";
                document.getElementById("inputField").style.background ="url('images/icon-error.svg') no-repeat 13rem";
                document.getElementById("inputField").style.opacity = "1";
                document.getElementById("error").style.visibility = "visible";
            }

        }

        e.preventDefault();
    }

    return <div className="input-field">
        <input id="inputField" onChange={handleInput} type="email" placeholder="Email Address" value={inputVal}/>
        <button onClick={handleClick} title="base-button"/>
        <p id="error">Please provide a valid email</p>
    </div>
}

export default Input;