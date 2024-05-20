// functional component
const Food = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <img src={require(`./${props.image}`)} alt={props.name} />
            <p>Price: {props.price}</p>
            <p>Ingredients: {props.ingredience}</p>
        </div>
    )
}

export default Food