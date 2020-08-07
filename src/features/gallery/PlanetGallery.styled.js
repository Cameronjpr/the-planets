import styled from 'styled-components'

export const StyledGallery = styled.section`
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  flex: none;
  width: 100%;
  flex-flow: row nowrap;
  scroll-snap-type: x mandatory;
`