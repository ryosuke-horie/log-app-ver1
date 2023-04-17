import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

const Logo: React.FC = () => {
  return <LogoContainer>MyLogApp Ver.1</LogoContainer>;
};

export default Logo;
