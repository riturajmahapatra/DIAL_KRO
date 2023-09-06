'use client'

import React from 'react'
import ScrollCarousel from 'scroll-carousel-react'

const ScrollCarouselComponent = () => {
  return (
    <ScrollCarousel autoplay autoplaySpeed={8} speed={7} onReady={() => console.log('I am ready')}>
      {[9, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
        <div key={item} className="h-36 w-48 rounded border-2 border-blue-300/70 bg-blue-300/20">
          {item}
        </div>
      ))}
    </ScrollCarousel>
  )
}

export default ScrollCarouselComponent
