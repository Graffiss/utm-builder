import React from 'react';
import styled, { css } from 'styled-components';

const StyledInput = styled.input`
  height: 50px;
  width: 450px;
  border: 1px solid grey;
  outline: none;
  border-radius: 10px;
  background: white;
  color: black;
  font-size: 24px;
  margin-bottom: 20px;
  padding-left: 10px;

  ${({ primary }) =>
    primary &&
    css`
      background: red;
    `}
`;

const Input = () => <StyledInput />;

export default Input;
