import React from 'react'


type HeaderNavigationMenuContentContentProps = {
  title: string
  subtitle: string
}
const HeaderNavigationMenuContent = ( {title, subtitle} :HeaderNavigationMenuContentContentProps ) => {
  return (
    <div  className="flex flex-col space-y-1 w-full" >
      <div className='font-semibold'>
          {title}
      </div>

      <div className='text-sm'>
          {subtitle}
      </div>

    </div>
  )
}

export default HeaderNavigationMenuContent