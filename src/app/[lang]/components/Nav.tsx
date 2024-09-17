"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link, usePathname } from "@/src/i18n/routing";

const Nav = () => {
  const routes = [
    // { name: 'About', path: '/about' },
    { name: "Demos", path: "/demos" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Testimonials", path: "/testimonials" },
    // { name: 'Services', path: '/services' },
  ];

  const pathname = usePathname();

  return (
    <header className="px-4 lg:px-6 h-[7vh] flex items-center sticky top-0 bg-white z-10">
      <Link className="flex items-center justify-center" href={"/"}>
        <span className="font-bold text-2xl">Laurin Brechter</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
        {routes.map((route) => {
          return (
            <Link
              href={route.path}
              key={route.name}
              className={`text-sm font-medium hover:underline underline-offset-4}`}
            >
              {route.name}
            </Link>
          );
        })}
        {/* <Select name='locale'>
        <SelectTrigger>
          <SelectValue placeholder="English" />
        </SelectTrigger>
        <SelectContent>
        <Link locale='de' href={'/blog'}><SelectItem value="de">de</SelectItem></Link>
            <SelectItem value="en"><Link locale='en' href={'/'}>en</Link></SelectItem>
        </SelectContent>
        </Select> */}
        <div className="flex items-center pl-4 gap-3">
          <Link
            locale="de"
            href={pathname}
            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            de
          </Link>
          <Link
            locale="en"
            href={pathname}
            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            en
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
