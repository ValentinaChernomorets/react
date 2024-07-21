import {useState} from 'react'
import {clientInfo} from '../services/DataService'

const Order = ({count, total}) => {
    let [show, setShow] = useState(false)
    let [delivery, setDelivery] = useState(false)
    let countTest = total.itemCount === undefined ? count : total.itemCount
    return (
        <span>
            ORDER: {countTest}  items / {total.totalAmount} {total.totalCurrency}
            <button onClick={()=>{
                setShow(true)
            }}>COMPLETE</button>
            { show &&
                <form>
                    <input placeholder="email" /><br/>
                    <input placeholder="phone" /><br/>
                    { /* HW*: delivery add checkbox - that then it's checked opens the delivery address fields - done*/ }
                    <div class="delivery-checkbox">
                        <input type="checkbox" id="delivery" name="delivery" onClick={()=>{
                            setDelivery(true)
                        }} />
                        <label for="delivery">Delivery</label><br/>
                    </div> { delivery &&
                        <input placeholder="address" /> 
                    } <br/>
                    <button onClick={(e)=>{
                        e.preventDefault()
                        let clientData = clientInfo(e)
                        fetch(`http://localhost:3001/api/pay/${clientData.orderId}`, {
                            method: 'POST',
                            body: JSON.stringify(clientData.client)
                        })
                            .then((response) => response.json())
                            .then(data => { console.log('pay response', data)
                                // redirect the user to the payment link
                            })
                    }}>PAY</button>
                </form>
            }
        </span>
    )
}

export  { Order }