import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom'
import '@splidejs/splide/dist/css/splide.min.css';

const Veggie = () => {

    const [viggies, setVeggies] = useState([])

    useEffect(() => {
        getPopular()
    }, [])

    const getPopular = async () => {

        const res = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`)
        const data = await res.json()
        setVeggies(data.recipes)
    }

    return (
        <Wrapper>
            <h3>Our vegetarian picks</h3>
            <Splide options={{
                perPage: 3,
                arrows: false,
                pagination: false,
                drag: 'free',
                gap: '2rem',
            }}>
                {
                    viggies.map(recipe => (
                        <SplideSlide key={recipe.id}>
                            <Link to={`/recipe/${recipe.id}/information`} >
                                <Card>
                                    <p>{recipe.title}</p>
                                    <img src={recipe.image} alt={recipe.title} />
                                </Card>
                            </Link>
                        </SplideSlide>
                    ))
                }
            </Splide>
        </Wrapper >
    )
}

const Wrapper = styled.section`
margin: 4rem 0;
`

const Card = styled.div`
    overflow: hidden;
    border-radius: 2rem;
    position: relative;
    cursor: pointer;

    ::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(transparent, rgba(0,0,0, 0.5));
    }

    p {
        position: absolute;
        bottom: 1rem;
        left: 0;
        width: 100%;
        text-align: center;
        color: white;
        font-weight: 600;
    }

    img {
        border-radius: 2rem;
        object-position: center;
        object-fit: cover;
        max-width: 100%;
    }
`

export default Veggie