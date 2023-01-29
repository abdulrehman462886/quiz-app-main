
import React from 'react'

export default function Footer() {
  return (
    <div bgcolor='light' className='text-center text-lg-left'>
      <div className='text-center p-3' style={{fontFamily:'fantasy', bottom: 0 , position:'fixed' ,width: '100%' , backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='http://www.mikrostartech.com/'>
         MikroStarTech
        </a>
      </div>
    </div>
  )
}
