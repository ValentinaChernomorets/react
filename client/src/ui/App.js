import { useState, useEffect } from 'react';

import { SortButton } from './SortButton';
import { Menu } from './Menu';
import { Order } from './Order';

import {getProductItems, getOrderItemCount} from '../services/DataService';

// HW:  using a new function from data service and UseEffect hook
// load order item count and render it

const App = () => {
    let [sortAsc, setSortAsc] = useState(true)
    let [items, setItems]     = useState([])
    let [count, setCount]     = useState(0)
    let [total, setTotal]     = useState({})
    useEffect(() => {
        (async () => {
            let itemsData = await getProductItems()
            setItems(itemsData)
        })()
    }, [])
    
    useEffect(() => {
        (async () => {
            let orderItemCount = await getOrderItemCount()
            setCount(orderItemCount)
        })()
    }, [])

    return (
        <>
            <SortButton
                text="sort"
                color="#fff" 
                backgroundColor="#333"
                sortAsc={sortAsc}
                setSortAsc={setSortAsc}
            />
            <Order count={count} total={total}/>
            <Menu items = {items} sortAsc = {sortAsc} setCount = {setCount} setTotal={setTotal} />
        </>
    )
}

export {App}