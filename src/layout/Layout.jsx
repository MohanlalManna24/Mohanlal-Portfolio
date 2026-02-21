import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className='layout max-w-8xl w-full m-auto md:px-10 px-5 lg:px-20'>
      {children}
    </div>
  )
}

export default Layout
