import React from 'react';
import { Container, Loader, Dot } from './styles';

const Loading = () => (
  <Container>
    <Loader>
      <Dot />
      <Dot />
      <Dot />
    </Loader>
  </Container>
);

export default Loading;
