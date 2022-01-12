import React, { useState } from 'react';
import "./App.css";

const blinkLed = () => {
    // TODO: Write blink logic
    alert('clicked');
}

const RemoteLed = ({ color }) => {

    const styles = { backgroundColor: color };
  
    return color ? (
        <span className="led" style={styles} />

    ) : null;
  };

const RemoteButton = (props) => {
    const [isHighlighted, setHighlight] = useState(false);

    const changeBackground = (e) => {
        setHighlight(!isHighlighted);
        if (!isHighlighted) {
            e.target.style.background = 'gray';
        } else {
            e.target.style.background = '#222530';
        }
    }
    
    return (
        // LED
        
        <div>
            <button 
        onMouseEnter={changeBackground}
        onMouseLeave={changeBackground}
        onClick={blinkLed}
        >
            {props.number}
            </button>

        </div>
        
        

        
    );
}

export default RemoteButton;