import { orderItem } from "../services/DataService"
import Item from './Item'
import { useState } from "react"

const Menu = ({items, sortAsc}) => {
    let [message, setMessage] = useState(undefined)
    //react DOM fragment <></>
    return (
        <>
            <h1>MENU</h1>
            {
                message ? <p style={{border: '1px solid green'}}>{message}</p>:<></>
            }
            <ul>{items
                .sort(
                    (item1, item2) => (sortAsc ? 1: -1) * (item1.price.amount - item2.price.amount)
                )
                .map((item, idx) => <Item {...{idx, item, setMessage, orderItem}} />
                //  Desctructuring bellow is too work, but this methods is spread  {...{idx, item, setMessage, orderItem}} is more compact and modern
                //  idx={idx} 
                //  item={item} 
                //  setMessage={setMessage} 
                //  orderItem={orderItem}
                )}
            </ul>
        </>
    )
}

export {Menu}
