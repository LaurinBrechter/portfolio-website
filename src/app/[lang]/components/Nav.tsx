'use client'

import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Link } from '@/src/i18n/routing'


const Nav = () => {


  const routes = [
    // { name: 'About', path: '/about' },
    { name: 'Demos', path: '/demos' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Testimonials', path: '/testimonials' },
    // { name: 'Services', path: '/services' },
  ]

  return (
    <header className="px-4 lg:px-6 h-[7vh] flex items-center sticky top-0 bg-white">
      <Link className='flex items-center justify-center' href={"/"}><span className="font-bold text-2xl">Laurin Brechter</span></Link>
      <nav className='ml-auto flex gap-4 sm:gap-6 items-center'>
      {
        routes.map((route) => {
          return (
              <Link href={route.path} key={route.name} className={`text-sm font-medium hover:underline underline-offset-4}`}>
                {route.name}
              </Link>
          )
        })
      }
      <Select name='locale'>
      <SelectTrigger>
        <SelectValue placeholder="English" />
      </SelectTrigger>
      <SelectContent>
          <SelectItem value="de"><Link locale='de' href={'/blog'}>de</Link></SelectItem>
          <SelectItem value="en"><Link locale='en' href={'/'}>en</Link></SelectItem>
      </SelectContent>
      </Select>
      <Link locale='de' href={'/'}>de</Link>
      <Link locale='en' href={'/'}>en</Link>
      </nav>
    </header>
  )
}

export default Nav