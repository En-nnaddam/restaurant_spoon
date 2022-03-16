import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Cuisine = () => {

  const [cuisines, setCuisines] = useState([])

  const params = useParams()

  const getCuisine = async (name) => {
    try {
      const res = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=9`)
      const { recipes } = await res.json()

      setCuisines(recipes)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCuisine(params.type)
  }, [params.type])

  return (
    <StyledCuisine
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {
        cuisines.map(cuisine => (
          <Card key={cuisine.id}>
            <Link to={`/recipe/${cuisine.id}/information`} >
              <img src={cuisine.image} alt={cuisine.title} />
              <h4>{cuisine.title}</h4>
            </Link>
          </Card>
        ))
      }
    </StyledCuisine>
  )
}

const StyledCuisine = styled(motion.main)`
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



export default Cuisine