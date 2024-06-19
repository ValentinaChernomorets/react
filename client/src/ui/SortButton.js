
// Module
// TODO: make the style more compact
const SortButton = ({text, color, backgroundColor, sortAsc, setSortAsc}) => {

    return (
        <button 
            style={{
                color,
                backgroundColor
            }}
            onClick={ () => {
                setSortAsc(!sortAsc)
            }}
        >
            {text} {sortAsc ? '^' : 'v'}
        </button>
    )
}

// export all object Button
export {SortButton}
