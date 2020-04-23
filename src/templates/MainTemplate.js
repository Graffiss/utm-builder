import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GlobalStyle from '../theme/GlobalStyle';

const StyledMainTemplate = styled.div`
  color: white;
  height: 100vh;
  width: 100vw;
`;

const MainTemplate = ({ children }) => (
  <StyledMainTemplate>
    <GlobalStyle />
    {children}
  </StyledMainTemplate>
);

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
