import React from 'react'
import SearchRecipie from './components/SearchRecipie';
import RecipieList from './components/RecipieList';
import Context from './contexts/Context';

const App = () => {
    return (
        <div className='App'>
            <Context>
                <SearchRecipie />
                <div className='recipe'>
                    <RecipieList />
                </div>
            </Context>
        </div>
    )
}

export default App
