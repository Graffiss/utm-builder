import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const MainView = ({ children }) => <StyledWrapper>{children}</StyledWrapper>;

MainView.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainView;
