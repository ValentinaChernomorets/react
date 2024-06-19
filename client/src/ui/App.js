import { useState, useEffect } from 'react';

import { SortButton } from './SortButton';
import { Menu } from './Menu';
import {getProductItems} from '../services/DataService'

const App = () => {
    let [sortAsc, setSortAsc] = useState(true)
    let [items, setItems] = useState([])
    useEffect(() => { 
        (async () => {
            let itemsData = await getProductItems()
            setItems(itemsData)
        })()
    }, [])
    // [] - single call
    return (
        <>
            <SortButton
                text="sort"
                color="#fff" 
                backgroundColor="#333"
                sortAsc={sortAsc}
                setSortAsc={setSortAsc}
            />
            <Menu items = {items} sortAsc = {sortAsc}/>
        </>
    )
}

export {App}