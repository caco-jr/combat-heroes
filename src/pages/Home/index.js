import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Home = () => (
  <>
    <Header />
    <Title>Hello World!</Title>
  </>
);

export default Home;
