import React from 'react'
import Header from '@/components/navbar/header';

type Props = {
    children: React.ReactNode
}
const layout = ( {children} : Props ) => {
  return (
    <div className='w-ful min-h-screen'>
        <Header/>
      {children}
    </div>
  )
}

export default layout
