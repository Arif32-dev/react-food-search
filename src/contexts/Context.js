import React, { createContext, useState, useEffect } from 'react'
import { async } from 'q';
export const MyContext = createContext()
const Context = (props) => {
    const [recipies, setRecipies] = useState([]);
    const [searchdata, setSearchData] = useState("chicken")
    const APP_ID = 'af86c40a';
    const APP_KEY = '81537fabfaccd03cc5855c8af75a31d2';
    useEffect(() => {
        getRecipie();

    }, [searchdata]);
    const getRecipie = async () => {
        const data = await fetch(`https://api.edamam.com/search?q=${searchdata}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const finalData = await data.json();
        setRecipies(finalData.hits);
    }
    const searchFunction = (data) => {
        setSearchData(data)
    }


    return (
        <React.Fragment>
            <MyContext.Provider value={{ recipies, searchFunction }}>
                {props.children}
            </MyContext.Provider>
        </React.Fragment>
    )
}

export default Context
