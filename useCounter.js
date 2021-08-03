import { useState } from "react";

//centralizar la logica de una manera abstracta para poderse reutilizar
const useCounter = (initialState = 10) => {

    const [counter,setCounter] = useState(initialState);

    const increment = (factor = 1) => {
        setCounter(counter + factor);
    }

    const decrement = (factor = 1) => {
        setCounter(counter - factor);
    }

    const reset = (to = initialState) => {
        setCounter(initialState);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    };

}

export default useCounter;