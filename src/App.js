import React from 'react';
import Grid from './components/Grid';
import styled from 'styled-components';

const GridWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
`;

function App() {
  return (
    <GridWrapper>
      <Grid />
    </GridWrapper>
  );
}

export default App;
