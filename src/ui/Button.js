import { useState } from 'react'
// Module
// TODO: make the style more compact
const Button = ({text,color,backgroundColor}) => {
    let [asc, setAsc] = useState(true)
    // let asc = false 
    return (
        <button 
            style={{
                color,
                backgroundColor
            }}
            onClick={ () => { 
                setAsc(!asc)
            }}
        >
            {text} {asc ? '^' : 'v'}
        </button>
    )
}

// export all object Button
export {Button}
