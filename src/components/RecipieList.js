import React, { useContext } from 'react'
import { MyContext } from '../contexts/Context';
import RecipieDetails from './RecipieDetails';
import uuid from 'uuid/v1'
const Recipie = () => {
    const { recipies } = useContext(MyContext)

    return (
        <React.Fragment>
            {
                recipies.map(recipie => (
                    <RecipieDetails key={uuid()}
                        title={recipie.recipe.label}
                        calorie={recipie.recipe.calories}
                        ingridents={recipie.recipe.ingredientLines}
                        image={recipie.recipe.image}
                        weight={recipie.recipe.totalWeight}
                    />
                ))
            }
        </React.Fragment>
    )
}

export default Recipie
