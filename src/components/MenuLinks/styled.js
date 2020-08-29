import styled from 'styled-components'
import { Link } from 'gatsby'

export const MenuLinksWrapper = styled.nav`
`

export const MenuLinksList = styled.ul`
  font-size: 1.2rem;
  font-weight: 300;
`

export const MenuLinksItem = styled.li`
  padding: .5rem 0;

  .active {
    color: #B1A6CC;
  }
`

export const MenuLinksLink = styled(Link)`
   color: #FFE0CD;
   text-decoration: none;
   transition: color 0.5s;

   &:hover {
    color: #B1A6CC;
   } 
`

