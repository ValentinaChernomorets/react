// HW1: 
// create a component named Counter
// which looks like 
// [+] 1 [-]
// change the value inc / dec baseed on clicks +/-
// limit the change to 1..10

import { useState } from 'react'

const Counter = ({text,color,backgroundColor}) => {
    const [count, setCount] = useState(0)
    const inc = () => {
        if (count <= 9) {
            setCount(count + 1);
        }
    };
    const dec = () => {
        if (count >= 1) {
            setCount(count - 1);
        }
    };

    return (
        <div className='counter'>
            <h1>Counter</h1>
            <button 
                style={{
                    color,
                    backgroundColor
                }}
                onClick={ () => { 
                    dec()
                }}
            >
            {'-'}
            </button>
            <span>{count}</span>
            <button 
                style={{
                    color,
                    backgroundColor
                }}
                onClick={ () => { 
                    inc()
                }}
            >
            {'+'}
            </button>
        </div>
    );
}

// export all object Counter
export {Counter}