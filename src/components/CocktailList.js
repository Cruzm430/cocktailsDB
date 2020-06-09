import React from "react";
import Cocktail from "./Cocktail";

const CocktailList = ({ cocktails, loading, searchTerm }) => {
  console.log(searchTerm)
  if (loading) {
    return <h2 className="section-title">Loading...</h2>;
  }
  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">
        Couldn't find your drink!
      </h2>
    );
  }
  return (
    <div>
      {!searchTerm ?
      <div>
        <section className='section'>
        <h2 className='section-title'>Mark's Recommendations</h2>
        <div className="cocktails-center">
          {cocktails.map(cocktail => {
            return <Cocktail key={cocktail.id} {...cocktail} />
          })}
        </div>
        </section>
      </div>
      : 
      <div>
      <section className='section'>
        <h2 className="section-title">Cocktail Results</h2>
        <div className="cocktails-center">
          {cocktails.map(cocktail => {
            return <Cocktail key={cocktail.id} {...cocktail} />
          })}
        </div>
      </section>
      </div>}
    </div>
  );
}

export default CocktailList;