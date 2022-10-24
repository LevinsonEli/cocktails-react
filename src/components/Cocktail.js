import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({cocktail}) => {
  const { id, name, image, info, glass } = cocktail;

  return (
    <article className='cocktail'>
      {/* image */}
      <div className='img-container'>
        <img src={image} alt={name} />
      </div>
      {/* description */}
      <div className='cocktail-footer'>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className='btn btn-primary btn-details'>
          details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail
