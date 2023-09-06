import React from 'react'
import Cards from './cards'

const Hero: React.FC = () => {
  return (
    <section className=" flex h-screen items-center text-black">
      <div className="container mx-auto mt-[20vh] text-center">
        <h1 className="mb-4  text-left text-4xl font-bold">Popular Categories</h1>
        <ul className="flex justify-center gap-6"></ul>
        <h1 className="mb-4  text-left text-4xl font-bold">Trending Categories</h1>
        <ul className="flex justify-center gap-6">
          <li>Daily Needs</li>
          <li>Daily Needs</li>
          <li>Daily Needs</li>
          <li>Daily Needs</li>
          <li>Daily Needs</li>
          <li>Daily Needs</li>
          <li>Daily Needs</li>
          <li>Daily Needs</li>
        </ul>
        <h1 className="my-5  mb-4 text-center text-4xl font-bold">Main Categories</h1>
        <div className="flex gap-5">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
        <h1 className="mb-4  text-left text-4xl font-bold">Popular Categories</h1>

        <p className="mb-8 text-lg">Your go-to place for amazing products.</p>
        <button className="rounded-full bg-white px-4 py-2 text-blue-500 hover:bg-blue-500 hover:text-white">
          Learn More
        </button>
      </div>
    </section>
  )
}

export default Hero
