import styled from "styled-components"
import { Link } from "gatsby"

export const RecommendedWrapper = styled.section`
  border-bottom: 1px solid #FFE0CD;
  border-top: 1px solid #FFE0CD;
  background: #000;
  display: flex;
`

export const RecommendedLink = styled(Link)`
  align-items: center;
  background: #000000;
  color: #FFE0CD;
  display: flex;
  padding: 2rem 2rem 2rem 6rem;
  text-decoration: none;
  transition: background 0.5s;
  width: 50%;
  &:hover {
    background: #B1A6CC;
    color: #000000;
  }
  &.previous {
    border-right: 1px solid #FFE0CD;
  }
  &.next {
    justify-content: flex-end;
  }
  &.previous:before {
    content: "\\2190";
    margin-right: 0.5rem;
  }
  &.next:after {
    content: "\\2192";
    margin-left: 0.5rem;
  }
`