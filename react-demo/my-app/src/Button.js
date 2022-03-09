import React from "react";

function Button({props}) {
    function handleClick() {
        alert('Clicked!')
    }
    return (
        <div>
            <button>{props.click}Click Me</button>
        </div>
    )
}

export default Button;