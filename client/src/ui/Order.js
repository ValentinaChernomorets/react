import {useState} from 'react'
import {payOrder} from '../services/DataService'

const Order = ({count, total}) => {
    let [show, setShow] = useState(false)
    let [delivery, setDelivery] = useState(false)
    return (
        <span>
            ORDER: {count} items / {total.totalAmount} {total.totalCurrency}
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
                        let form = e.target.parentElement
                        let orderId = localStorage.getItem('orderId')
                        let checkbox = document.getElementById('delivery');
                        let client = {
                            email: form.querySelector('[placeholder="email"]').value,
                            phone: form.querySelector('[placeholder="phone"]').value,
                            address: checkbox.checked ? form.querySelector('[placeholder="address"]').value : '',
                        }
                        fetch(`http://localhost:3001/api/pay/${orderId}`, {
                            method: 'POST',
                            body: JSON.stringify(client)
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