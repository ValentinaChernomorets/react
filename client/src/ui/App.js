import { useState, useEffect } from 'react';

import { SortButton } from './SortButton';
import { Menu } from './Menu';
import {getProductItems} from '../services/DataService'

const App = () => {
    let [sortAsc, setSortAsc] = useState(true)
    let [items, setItems] = useState([])
    useEffect(() => {
        console.log("IN USE EFFECT")
        getProductItems(setItems)
    }, [])
    // [] - single call
    console.log("AFTER USE EFFECT !!!")
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