import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'

const Searched = () => {

  const params = useParams()
  const [searchedRecipe, setSearchedRecipe] = useState([])

  const getSearched = async (query) => {
    try {
      const res = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&tags=${query}&number=9`)
      const { recipes } = await res.json()

      setSearchedRecipe(recipes)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSearched(params.search)
  }, [params.search]);

  return (
    <StyledCuisine>
      {
        searchedRecipe.map(cuisine => (
          <Card key={cuisine.id}>
            <Link to={`/recipe/${cuisine.id}/information`} >
              <img src={cuisine.image} alt={cuisine.title} />
              <h4>{cuisine.title}</h4>
            </Link>
          </Card>
        ))
      }
    </StyledCuisine >
  )
}

const StyledCuisine = styled.main`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
grid-gap: 3rem;
`
const Card = styled.div`

  h4 {
    text-align: center;
  }

  img {
    max-width: 100%;
    object-fit: cover;
    border-radius: 2rem;
  }
`


export default Searched