import styled from 'styled-components'

export const PaginationWrapper = styled.section`
    align-items: center;
    border-top: 1px solid #FFE0CD;
    color: #FFE0CD;
    display: flex;
    padding: 1.5rem 3rem 1.5rem 6rem;
    justify-content: space-between;

    a {
      color: #FFE0CD;
      text-decoration: none;
      transition: color 0.5s;

      &:hover {
        color: #B1A6CC;
    }
  }
`