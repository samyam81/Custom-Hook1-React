import React from "react";
import { useState } from "react";

function useFormInput(initialValue) {
    const[value,setValue]=useState(initialValue);
    
    const handleChange=(e)=>{
        setValue(e.target.value);
    }

    return{
        value,
        onchange:handleChange,
    };

}

export default useFormInput;