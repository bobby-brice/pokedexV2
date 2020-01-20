import React from 'react';
import text from '../assets/pokeFont.png';
import './styles/DetailView.css';

const DetailView = ({ pokemon }) => {
  const { name, sprite, type, exp, weight} = pokemon; //destructure our data from the pokemon object
  
  return (
    <section className="detail-view">
      <img src={text} alt="custom text"/>
      <img src={sprite} className="sprite-image" alt="sprite"/>
      <div className="data-wrapper">
        <h1 className="data-name">ID: {name}</h1>
        <p className="data-char">Type: {type}</p>
        <p className="data-char">Exp: {exp}</p>
        <p className="data-char">Weight (lbs): {weight}</p>
      </div>
    </section>
  )
}

export default DetailView;