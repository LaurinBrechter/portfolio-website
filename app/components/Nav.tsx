import React from 'react'
import Link from 'next/link'

const Nav = () => {

  const routes = [
    { name: 'About', path: '/about' },
    { name: 'Demos', path: '/demos' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Testimonials', path: '/testimonials' },
  ]

  return (
    <div className='flex h-[7%] bg-slate-900 items-center gap-10 p-3 text-white'>
      <Link className='text-3xl' href={"/"}>Vertex Analytics</Link>
      {
        routes.map((route) => {
          return (
            <div key={route.name} className='p-4 text-xl'>
              <Link href={route.path} className='hover:underline'>
                {route.name}
              </Link>
            </div>
          )
        })
      }
      {/* <div className='bg-slate-500 p-4'>
        <Link href='/'>Home</Link>
      </div> */}

    </div>
  )
}

export default Nav