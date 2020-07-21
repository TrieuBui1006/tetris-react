import styled from 'styled-components'

export const StyledPredict = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${(props) => props.height},
    calc(22vh / ${(props) => props.width})
  );
  grid-template-columns: repeat(${(props) => props.width}, 1fr);
  grid-gap: 1px;
  border: 2px solid #333;
  width: 85%;
  height: auto;
  max-width: 25vw;
  margin: 0 auto 20px;
  background: #111;
`
