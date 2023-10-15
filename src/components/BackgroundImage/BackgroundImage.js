// BackgroundImage.js

import React from 'react'

function BackgroundImage({ imageUrl, children }) {
  const backgroundImageStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  return (
    <div style={backgroundImageStyle} className="h-screen">
      {children}
    </div>
  )
}

export default BackgroundImage
