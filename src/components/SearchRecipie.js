import React, { useState, useContext } from 'react'
import { MyContext } from '../contexts/Context';

const SearchRecipie = () => {
    const { searchFunction } = useContext(MyContext)
    const [search, setSearch] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault()
        searchFunction(search)
        setSearch('')
    }
    return (
        <form onSubmit={handleSubmit} className='form' >
            <input className="input-text" placeholder='Search Food Items' required type='text' value={search} onChange={e => setSearch(e.target.value)} />
            <button className="btn" type='submit'><span>Search Food</span></button>
        </form>
    )
}

export default SearchRecipie
