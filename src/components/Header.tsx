import React from 'react';
import Button from '@mui/material/Button';
import styled from 'styled-components';

const HeaderStyled = styled.header`
  align-items: center;
  background: #00796B;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
`;

const H1Styled = styled.h1`
  color: #EEE;
  font-size: 1.6rem;
  font-family: "Roboto";
  font-weight: 500;
`;

const ButtonStyled = styled(Button)`
  && {
    background-color: #00796B;
    border-radius: 2px;
    color: #EEE;
    padding: 0.5rem 1.2rem;
    &:hover {
      background-color: #00A98E;
    }
  }
`;

function Header() {
  return (
    <HeaderStyled>
      <H1Styled>Teste front-end</H1Styled>
      <ButtonStyled type="submit" form="form" variant="text">Salvar</ButtonStyled>
    </HeaderStyled>
  );
}

export default Header;
