import React from 'react'
import Link from 'next/link'

const Nav = () => {

  const routes = [
    // { name: 'About', path: '/about' },
    { name: 'Demos', path: '/demos' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Testimonials', path: '/testimonials' },
    { anme: 'Services', path: '/services' },
  ]

  return (
    // <div className='flex h-[7%] items-center gap-10 p-3'>
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className='flex items-center justify-center' href={"/"}><span className="font-bold">Vertex Analytics</span></Link>
      <nav className='ml-auto flex gap-4 sm:gap-6'>
      {
        routes.map((route) => {
          return (
            // <div key={route.name} className='p-4 text-xl'>
              <Link href={route.path} className='text-sm font-medium hover:underline underline-offset-4'>
                {route.name}
              </Link>
            // </div>
          )
        })
      }
      </nav>
      {/* <div className='bg-slate-500 p-4'>
        <Link href='/'>Home</Link>
      </div> */}

    </header>
  )
}

export default Nav