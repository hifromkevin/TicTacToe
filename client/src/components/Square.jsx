import React from 'react';

const Square = ({grid, squareId, newPlay}) => {
  return (
    <div className="col-4 square" data-row={grid[0]} data-col={grid[1]} id={squareId} onClick={(e) => newPlay(e) }></div>
  );
};

export default Square;