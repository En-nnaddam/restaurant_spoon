import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'


const Recipe = () => {

    const [recipe, setRecipe] = useState({})
    const [activeTab, setActiveTab] = useState('instructions')

    const params = useParams()
    const getRecipe = async (id) => {
        try {
            const res = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
            const recipe = await res.json()

            setRecipe(recipe)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getRecipe(params.id)
    }, [params.id]);

    console.log(recipe.extendedIngredients);

    return (
        <StyledRecipe>
            <div>
                <h2>{recipe.title}</h2>
                <img src={recipe.image} alt={recipe.title} />
            </div>
            <Info>
                <Button
                    className={activeTab === 'instructions' ? 'active' : ''}
                    onClick={() => setActiveTab('instructions')}
                >
                    Instructions
                </Button>
                <Button
                    className={activeTab === 'ingredients' ? 'active' : ''}
                    onClick={() => setActiveTab('ingredients')}
                >
                    Ingredients
                </Button>
                {
                    activeTab === 'instructions' && (
                        <div>
                            <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
                            <p dangerouslySetInnerHTML={{ __html: recipe.instructions }}></p>
                        </div>
                    )}
                {
                    activeTab === 'ingredients' && (
                        <ul>
                            {
                                recipe.extendedIngredients.map(ingredient => (
                                    <li key={ingredient.id}>{ingredient.original}</li>
                                ))
                            }
                        </ul>
                    )}

            </Info>
        </StyledRecipe>
    )
}

const StyledRecipe = styled.div`
margin-top: 10rem;
margin-bottom: 5rem;
display: flex;

.active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
}

h2 {
    margin-bottom: 2rem;
}

li {
    font-size: 1.2rem;
    line-height: 2.5rem;    
}

ul {
    margin-top: 2rem;
}
`

const Button = styled.button`
padding: 1rem 2rem;
color: #313131;
background-color: white;
border: 1px solid black;
font-weight: 600;
margin-left: 2rem;
`

const Info = styled.div`
margin-left: 2rem;
`

export default Recipe