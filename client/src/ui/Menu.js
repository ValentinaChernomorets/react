const Menu = ({items, sortAsc}) => {
    //react DOM fragment <></>
    return (
        <>
            <h1>MENU</h1>
            <ul>{items
                .sort(
                    (item1, item2) => (sortAsc ? 1: -1) * (item1.price - item2.price)
                )
                .map((item, index) =>
                    <li key={index}>
                        <h2>{item.name}</h2>
                        <img src={item.image} width="100" alt="images"/>
                        <p>{item.price.amount}{item.price.currency}</p>
                    </li>
            )}
            </ul>
        </>
    )
}

export {Menu}