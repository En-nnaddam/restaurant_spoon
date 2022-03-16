import Pages from './pages'
import Category from './components/Category'
import Search from './components/Search';
import styled from 'styled-components'
import { BrowserRouter, Link } from 'react-router-dom'
import { GiKnifeFork } from 'react-icons/gi'

function App() {
  return (
    <BrowserRouter>
      <Nav>
        <Logo to={'/'}>
          <GiKnifeFork />
          Delecious
        </Logo>
      </Nav>
      <Search />
      <Category />
      <Pages />
    </BrowserRouter>
  );
}

const Nav = styled.nav`
display: flex;
justify-content: center;
align-items: center;
margin-top: 2rem; 
`

const Logo = styled(Link)`
font-weight: bold;
cursor: pointer;
`

export default App;
