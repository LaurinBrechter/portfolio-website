import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t h-[6vh]" >
      <p className="text-xs text-gray-500 dark:text-gray-400">
        © 2024 Laurin Brechter. All rights reserved. Laurin Brechter, Willem-van-Vloten Straße 29, 44263 Dortmund, brechterlaurin@gmail.com
      </p>
      <p className="text-xs text-gray-500 dark:text-gray-400 pr-4">
        This website's source code is available {" "}
        <Link
          className="text-xs hover:underline underline-offset-4 text-black"
          href={"https://github.com/LaurinBrechter/portfolio-website"}
        >
          here
        </Link>
      </p>
      {/* <nav className="flex gap-4 sm:gap-6">
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          Terms of Service
        </Link>
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          Privacy
        </Link>
        
      </nav> */}
    </footer>
  );
}
