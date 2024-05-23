import { useState } from 'react';
import { SortButton } from './SortButton';
import { Menu } from './Menu';
import {getProductItems} from '../services/DataService'

const App = () => {
    let [sortAsc, setSortAsc] = useState(true)
    let items = getProductItems()
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