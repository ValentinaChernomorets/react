// import { Product } from '../model/Product';
// import { Money } from '../model/Money';

const getProductItems = async () => {
    return fetch('http://localhost:3001/api/products')
        .then((response) => response.json())
}

const getOrderItemCount = async () => {
    let orderId = localStorage.getItem('orderId')
    return fetch(`http://localhost:3001/api/count/${orderId}`)
    .then((response) => response.json())
}

const orderItem = async (productId) => {
    let orderId = localStorage.getItem('orderId')
    return fetch(`http://localhost:3001/api/order/${orderId}/${productId}`)
        .then((response) => response.json())
}

// HW* : create the function clientInfo() for order pay
function clientInfo (event) {
    let form = event.target.parentElement
    let orderId = localStorage.getItem('orderId')
    let checkbox = document.getElementById('delivery');
    let client = {
        email: form.querySelector('[placeholder="email"]').value,
        phone: form.querySelector('[placeholder="phone"]').value,
        address: checkbox.checked ? form.querySelector('[placeholder="address"]').value : '',
    }
    return {orderId, client};
}

export {getProductItems, orderItem, getOrderItemCount, clientInfo}