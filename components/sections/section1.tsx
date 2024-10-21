import React from 'react'
import { Button } from '../ui/button'

const section1 = () => {
  return (
    <div className='flex flex-col h-full bg-background'>
      <div className='max-w-4xl mx-auto px-4 py-16 text-center'>
        <div className='inline-block px-4 py-2 mb-6 rounded-full bg-pink-100 text-pink-800 text-sm font-medium'>
          Over 3 million ready-to-work creatives!
        </div>

        <h1 className="text-4xl md:text-6xl font-bold serif mb-6">
          The world&apos;s destination for design
        </h1>

        <p className='text-xl text-muted-foreground md-8'>
          Get inspired by the work of millions of top-rated designers & agencies around the world.
        </p>

        {/* Ajoute une marge au-dessus du bouton */}
        <Button
          size={"lg"}
          className='bg-foreground/80 p-6 text-white hover:bg-foreground/80 rounded-full mt-8'
        >
          Get started
        </Button>
      </div>
    </div>
  )
}

export default section1;
