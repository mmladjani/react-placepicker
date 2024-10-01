import { useState, useEffect } from "react";

const ProgressBar = ({ timer }) => {

    const [timeRemaining, setTimeRemaining] = useState(timer);

    useEffect(() => {
    const intervalId = setInterval(() => {
        setTimeRemaining(prevValue => prevValue - 10);
    }, 10)

    return () => {
        clearInterval(intervalId);
    }
    }, [])


    return (
        <progress value={timeRemaining} max={timer}/>
    )
}

export default ProgressBar;