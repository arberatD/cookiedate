import { useState, useEffect } from 'react';


export default function Counter (props) {

    const [counter, setCounter] = useState(0)
    const handleClick = () => {
      setCounter(counter + 2)
    }

    return (
        
        
        <button onClick={handleClick} className="btn-hover color-8" type="button" ></button>
    
        
            )
}