const Item = ({ item, idx, setMessage, orderItem, setCount, setTotal}) => {
    return (
        <li key={idx}>
            <h2>{item.name}</h2>
            <img src={item.image} width="100" alt="images"/>
            <p>{item.price.amount}{item.price.currency}</p>
            <button 
                onClick = {
                    async e => { // <-----wrapper
                        let productId = e.target.dataset.productId
                        let response = await orderItem(productId)
                        localStorage.setItem('orderId', response.orderId)
                        setMessage(response.message)
                        // HW2: group these values
                        setCount(response.itemCount)
                        setTotal({totalAmount: response.totalAmount, totalCurrency: response.totalCurrency})
                    } // <-----wrapper
                }
                data-product-id={item.id}
            >ORDER
            </button>
        </li>
    )
}

export default Item