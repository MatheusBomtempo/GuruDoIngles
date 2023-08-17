import React, { useState } from 'react';

const Bg = ({ backgroundColor, children }) => {
  const [bgColor, setBgColor] = useState(backgroundColor);

  const changeBackgroundColor = newColor => {
    setBgColor(newColor);
  };

  const containerStyle = {
    backgroundColor: bgColor,
    padding: '10px',
  };

  return (
    <div style={containerStyle}>
      {React.Children.map(children, child =>
        React.cloneElement(child, { changeBackgroundColor })
      )}
    </div>
  );
};

export default Bg;
