'use client'

import React from 'react'
import Link from 'next/link'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { usePathname, useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'

const Nav = () => {

  const pathname = usePathname()


  const routes = [
    // { name: 'About', path: '/about' },
    { name: 'Demos', path: '/demos' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Services', path: '/services' },
  ]

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className='flex items-center justify-center' href={"/"}><span className="font-bold">Vertex Analytics</span></Link>
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
      <Link locale='de' href={'/de/'}>de</Link>
      <Link locale='de' href={'/en/'}>en</Link>
      </nav>
    </header>
  )
}

export default Nav