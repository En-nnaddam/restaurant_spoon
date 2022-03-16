import { FaSearch } from 'react-icons/fa'
import { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Search = () => {

    const [value, setValue] = useState('')
    const navigate = useNavigate()

    const handelSubmit = (e) => {
        e.preventDefault()
        console.log(value);
        navigate(`/search/${value}`)
    }

    return (
        <StyledForm onSubmit={handelSubmit} >
            <FaSearch />
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </StyledForm>
    )
}

const StyledForm = styled.form`
position: relative;
margin-top: 4rem;
width: min-content;
color: white;
margin-left: 13rem;
min-width: 15rem;
width: 50%;

input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
    color: white;
    display: block;
   width: 100%;
}

svg {
    position: absolute;
    top: 50%;
    left: 1rem;
    
    transform: translateY(-50%);
}
`

export default Search