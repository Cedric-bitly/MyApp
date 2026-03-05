import { useState } from "react";

const Sixthcomponent =() =>{
    const [number, setNumber] = useState(50)
    return(
        <div className="Sixthcomponent">

            <h1>Welcome to my sixth component</h1>

            <h2>Current number is: {number}</h2>

            <button onClick={ () => setNumber(55)}>Click to update the number</button>
        </div>
    )
}

export default Sixthcomponent;