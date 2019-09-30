import React from 'react';
import styled from 'styled-components';

const IMG = styled.img``;

const Image = ({ ...props }) => {
  return <IMG {...props} />;
};

export default Image;
