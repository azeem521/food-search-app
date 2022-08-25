import React from 'react'
import './RecipeTiles.css'

const RecipeTiles = ({ recipe }) => {
  return (
    <div className='recipeTile'>
        <img className='recipeTile__img' src={recipe['recipe']['image']} alt="slow net" />
        <p className='recipeTile__name'>{recipe['recipe']['label']}</p>
    </div>
  )
}

export default RecipeTiles