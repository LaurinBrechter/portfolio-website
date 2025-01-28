"use client";

import React from "react";
import { Link, usePathname, useRouter } from "@/src/i18n/routing";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/src/components/ui/button";
import { ChevronDownIcon, GlobeIcon } from "lucide-react";
import Lang from "@/src/lang/lang";

const Nav = ({ locale }: { locale: string }) => {
  const localTranslations = Lang[locale];

  console.log(locale)

  const routes = [
    // { name: 'About', path: '/about' },
    { name: localTranslations.home.nav.blog, path: "/blog" },
    { name: localTranslations.home.nav.projects, path: "/projects" },
    { name: localTranslations.home.nav.testimonials, path: "/testimonials" },
  ];

  const pathname = usePathname();

  const router = useRouter();

  return (
    <header className="px-4 lg:px-6 h-[7vh] flex items-center sticky top-0 bg-white z-10">
      <Link className="flex items-center justify-center" href={"/"}>
        <span className="font-bold lg:text-2xl">Laurin Brechter</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
        {routes.map((route) => {
          return (
            <Link
              href={route.path}
              key={route.name}
              className={`text-sm font-medium hover:underline decoration-2 underline-offset-2`}
            >
              {route.name}
            </Link>
          );
        })}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2 p-2 py-1 h-8">
              <GlobeIcon className="h-4 w-4" />
              {/* <span>🌐</span> */}
              <ChevronDownIcon className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0 flex flex-col">
            <Button
              variant="ghost"
              className="justify-start"
              onClick={() => {
                router.push(pathname, { locale: "de", scroll: false });
              }}
            >
              🇩🇪
            </Button>
            <Button
              variant="ghost"
              className="justify-start"
              onClick={() => {
                router.push(pathname, { locale: "en", scroll: false });
              }}
            >
              🇬🇧
            </Button>
          </PopoverContent>
        </Popover>
      </nav>
    </header>
  );
};

export default Nav;
