import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./dashboard/_components/Header";
import Link from "next/link";
import ShuffleHero from "./Hero";
import { IntroFadeIn } from "@/components/Intro";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-neutral-800 dark:border-neutral-700">
        <nav className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
          <div className="flex items-center justify-between">
            <a className="flex-none text-xl font-semibold dark:text-white" href="#" aria-label="Brand"></a>
            <div>
              <button type="button" className="hs-collapse-toggle size-12 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                <Image src={'/logo.svg'} alt="logo" width={70} height={70} />
              </button>
            </div>
          </div>
          <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end sm:ps-7">
              <Link href="/dashboard" className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 sm:border-s sm:border-gray-300 py-2 sm:py-0 sm:ms-4 sm:my-6 sm:ps-6 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500">
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                </svg>
                Get Started
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex-grow text-center mt-44">
        <IntroFadeIn githubStars={0} />
      </main>
      
      <footer className="bg-white text-gray-800 py-5 border-t border-gray-200 fixed bottom-0 left-0 w-full h-16">
        <div className="max-w-[85rem] mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm">© 2024 Om Rawat. All rights reserved.</p>
            <div className="flex space-x-4 mt-2 sm:mt-0">
              <Link href="/privacy" className="text-gray-600 hover:text-blue-600 text-sm">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-600 hover:text-blue-600 text-sm">Terms of Service</Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600 text-sm">Contact Us</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
