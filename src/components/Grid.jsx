import React, { Component } from 'react';
import styled from 'styled-components';
import Image from './Image';

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
class Grid extends Component {
  state = {
    image: [[0, 1, 2], [0, 1, 2], [0, 1, 2]]
  };
  render() {
    const { image } = this.state;
    return (
      <ImageGrid>
        {image.map((row, rowId) => {
          console.log(row);
          return row.map((col, colId) => (
            <Image src={`https://picsum.photos/200/2${rowId}${colId}`} />
          ));
        })}
      </ImageGrid>
    );
  }
}

export default Grid;
