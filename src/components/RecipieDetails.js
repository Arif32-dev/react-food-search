import React from 'react'
import uuid from 'uuid/v1'
const RecipieDetails = ({ title, calorie, ingridents, image, weight }) => {
    return (
        <div className='component'>
            <h3>{title}</h3>
            <img src={image} alt={title} />
            <p>Weight: {weight} g</p>
            <p>Calorie: {calorie} k/cal</p>
            <ol>
                {ingridents.map(ingredient => (
                    <li key={uuid()}>{ingredient}</li>
                ))}
            </ol>
        </div>
    )
}

export default RecipieDetails
