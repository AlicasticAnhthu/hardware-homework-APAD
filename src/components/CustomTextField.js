import React, { useState, useRef } from 'react';
import { Button, TextField } from "@mui/material";

function CustomTextField(props) {
    const [inputValue, setInputValue] = useState(''); // Initialize state for input value

    const inputRef = useRef(null);  // Use useRef to create a reference, if needed for other uses

    function handleChange(event) {
        // Update state with the new input value
        setInputValue(event.target.value);
    }

    function handleAlert() {
        // Alert the current value of the input
        alert('Input value is: ' + inputValue);
    }

    return (
        <div>
            <TextField
                ref={inputRef}
                onChange={handleChange} 
                size="small"
                label="Enter qty"
                variant="outlined"
                value={inputValue}
            />
            <Button onClick={handleAlert}> Feasible </Button>
        </div>
    );
}

export default CustomTextField;

