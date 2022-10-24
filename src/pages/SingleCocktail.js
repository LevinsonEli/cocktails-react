import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'

import Cocktail from '../classes/Cocktail'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const res = await fetch(`${url}${id}`);
        const data = await res.json();
        if (data.drinks) {
          const convertedFetchedData = Cocktail.convertFetchedData(
            data.drinks[0]
          );
          setCocktail(new Cocktail({...convertedFetchedData}));
        }
        else
          setCocktail(null);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    getCocktail();
  }, [id]);

  if (loading)
    return <Loading />
  
  if (!cocktail)
    return <h2 className='section-title'>no cocktail found</h2>

  const {
          name,
          image,
          info,
          category,
          glass,
          instruction,
          ingredients,
        } = cocktail;
  return (
    <section>
      <Link className='btn btn-primary' to='/'>
        Back Home
      </Link>
      <h2 className='section-title'>{name}</h2>
      <div className='drink'>
        <img src={image} alt={name} />
        <p>
          <span className='drink-data'>name:</span>
          {name}
        </p>
        <p>
          <span className='drink-data'>category:</span>
          {category}
        </p>
        <p>
          <span className='drink-data'>info:</span>
          {info}
        </p>
        <p>
          <span className='drink-data'>glass:</span>
          {glass}
        </p>
        <p>
          <span className='drink-data'>instructions:</span>
          {instruction}
        </p>
        <p>
          <span className='drink-data'>ingredients:</span>
          {ingredients.filter(item => item).map((item, index, ingredients) => {
            return (
              <span key={index}>
                {item}
                {index !== (ingredients.length - 1) && ','}
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
}

export default SingleCocktail
