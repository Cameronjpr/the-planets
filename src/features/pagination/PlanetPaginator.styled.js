import styled from "styled-components"

export const Paginator = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  justify-content: center;
`

export const PaginationItem = styled.li`
  display: inline;
  @media (max-width: 600px) {
    flex: 1 0 21%;
  }
  color: lightgrey;
  background: black;
  border: none;
` 