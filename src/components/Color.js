import React from 'react';

export default function Color() {
  const colors = ['pink', 'green', 'lightcoral', 'purple', 'lightblue', 'coral'];

  const style = {
    backgroundColor: colors[Math.floor(Math.random() * colors.length)],
    height: '100px',
    width: '100px'
  };

  return <div style={style}></div>;
}
