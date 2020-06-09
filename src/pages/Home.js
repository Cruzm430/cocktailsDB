import React, {useState,useEffect} from "react";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";


const Home = () => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    setLoading(true);
    async function getDrinks() {
        try {
          let drinks = []
          if(!searchTerm){
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a`)
            const data = await response.json()
            drinks = data.drinks.slice(0,2)
          }else{
            const response = await fetch(
              `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
            );
            const data = await response.json()
            drinks = data.drinks
          }
          if (drinks) {
            if (drinks.length % 2) drinks = drinks.slice(0,drinks.length-1)
            const newCocktails = drinks.map(drink => {
              const {
                idDrink,
                strDrink,
                strDrinkThumb,
                strAlcoholic,
                strGlass
              } = drink;
  
              return {
                id: idDrink,
                name: strDrink,
                image: strDrinkThumb,
                info: strAlcoholic,
                glass: strGlass
              };
            });
            setCocktails(newCocktails);
          } else {
            setCocktails([]);
          }
        } catch (error) {
          console.log(error);
        } 
      setLoading(false);
    }

    getDrinks();
  }, [searchTerm]);
  return (
    <main>
      <SearchForm setSearchTerm={setSearchTerm} />
      <CocktailList cocktails={cocktails} loading={loading} searchTerm={searchTerm} />
    </main>
  );
}

export default Home;