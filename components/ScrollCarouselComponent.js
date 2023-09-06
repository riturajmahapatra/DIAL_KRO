'use client'

import Image from 'next/image'
import React from 'react'
import ScrollCarousel from 'scroll-carousel-react'

const ScrollCarouselComponent = () => {
  return (
    <ScrollCarousel autoplay autoplaySpeed={8} speed={7} onReady={() => console.log('I am ready')}>
      {[
        <Image src="/carouselImages/child2.jpg" height={600} width={600} alt="hero" />,
        <Image src="/carouselImages/child3.jpg" height={600} width={600} alt="hero" />
      ].map((item) => (
        <div key={item} className=" h-24 w-full rounded border-2 border-blue-300/70 bg-blue-300/20">
          {item}
        </div>
      ))}
    </ScrollCarousel>
  )
}

export default ScrollCarouselComponent
