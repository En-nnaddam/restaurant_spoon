import { FaPizzaSlice, FaHamburger, } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

import React from 'react'

const Category = () => {
    return (
        <StyledCategory>
            <SLink to='/cuisine/Italian'>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </SLink>
            <SLink to='/cuisine/American'>
                <FaHamburger />
                <h4>American</h4>
            </SLink>
            <SLink to='/cuisine/Thai'>
                <GiNoodles />
                <h4>Thai</h4>
            </SLink>
            <SLink to='/cuisine/Japonese'>
                <GiChopsticks />
                <h4>Japonese</h4>
            </SLink>
        </StyledCategory>
    )
}

const StyledCategory = styled.nav`
    display: flex;
    justify-content: center;
    margin: 2rem 0;
`

const SLink = styled(NavLink)`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
border-radius: 50%;
width: 6rem;
padding: 1rem;
background: linear-gradient(35deg, #494949, #313131);
color: white;
transform: scale(0.8);

h4 {
    font-size: 0.8rem;
}

svg {
    font-size: 1.5rem;
}

&.active {
    background: linear-gradient(35deg, rgba(256, 150, 150), rgba(200, 100, 200));
    font-size: 1.1rem;
}

`

export default Category