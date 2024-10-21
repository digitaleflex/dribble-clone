import React from 'react'
import Header from '@/components/navbar/header';
import Footer from './../../components/navbar/footer';

type Props = {
    children: React.ReactNode
}
const layout = ( {children} : Props ) => {
  return (
    <div className='w-ful min-h-screen'>
        <Header/>
          {children}
        <Footer />
    </div>
  )
}

export default layout
