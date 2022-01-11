import React from 'react';

const Boxcolor = ({ r, g, b }) => {
  const divStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
  };
  return (
    <div style={divStyle}>
      rgb({r}, {g}, {b}) Box color
    </div>
  );
};

export default Boxcolor;
