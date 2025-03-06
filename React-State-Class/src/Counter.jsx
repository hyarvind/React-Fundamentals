import { useState } from "react";

function init(){
    console.log("init was called");
    
    return Math.random();
}

export default function Counter() {
    let [count, setCount] = useState(init);  // initialization

    ///// callback to updater functions
   console.log("component was rerender");
   
    let incCount = () => {
        setCount((currCount) => {
            return currCount + 1;
        });
        // setCount((currCount) => {
        //     return currCount + 1;
        // });
        // setCount(25);
    };
    
    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick={incCount}>Increase count</button>
        </div>
    );
}
