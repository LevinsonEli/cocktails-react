import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();

  if (loading)
    return <Loading />
  else if (cocktails.length < 1)
    return <h2 className='section-title'>No Match</h2>
  else
    return (
      <section className="section">
        {/* Title */}
        <h2 className="section-title">
          cocktails
        </h2>
        {/* Cocktails List */}
        <div className="cocktails-center">
          {cocktails.map(item => {
            return <Cocktail key={item.id} cocktail={item} />
          })}
        </div>
      </section>
    )
}

export default CocktailList
