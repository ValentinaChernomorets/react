// functional component
const Heading = (props) => {
    console.log(props.text)
    return (
        <h1>{props.text}</h1>
    )
}

export default Heading