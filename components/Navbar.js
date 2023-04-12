import { React, useRef } from 'react'
import { TiNews } from 'react-icons/ti'
import { HiMenuAlt1 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { GiNewspaper } from 'react-icons/gi'
import { FcSportsMode } from 'react-icons/fc'
import { GrTechnology } from 'react-icons/gr'
import { BiWorld, BiMoney } from 'react-icons/bi'
import { SiDcentertainment } from 'react-icons/si'
import { MdScience } from 'react-icons/md'
import { FaGamepad } from 'react-icons/fa'
import Link from 'next/link'

const Navbar = () => {
    const ref = useRef()
    const toggleNav = () => {
        if (ref.current.classList.contains('-translate-x-full')) {
            ref.current.classList.remove('-translate-x-full')
            ref.current.classList.add('translate-x-0')
        }
        else if (!ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-0')
            ref.current.classList.add('-translate-x-full')
        }
    }
    return (
        <>
            <aside ref={ref} id="logo-sidebar" className="md:hidden fixed top-0 left-0 z-40 w-[100vw] h-[100vh] -translate-x-full transition-transform" aria-label="Sidebar">
                <div className="flex flex-col h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <form className='block'>
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-white sr-only dark:text-white">Search</label>
                        <div className="relative left-5 bottom-2 w-72">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-white dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search News!" required />
                            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                    </form>
                    <span onClick={toggleNav} className='text-white text-3xl absolute right-4'><AiOutlineClose /></span>
                    <ul className="space-y-2 font-medium">
                        <li className='mb-6'>
                            <span className="ml-5 text-white text-2xl">Menu</span>
                        </li>
                        <li>
                            <Link href="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span className='text-2xl text-gray-300'><GiNewspaper /></span>
                                <span className="flex-1 ml-3 whitespace-nowrap">HeadLines</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/sports" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span className='text-2xl'><FcSportsMode /></span>
                                <span className="flex-1 ml-3 whitespace-nowrap">Sports</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/technology" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span className='text-2xl'><GrTechnology /></span>
                                <span className="flex-1 ml-3 whitespace-nowrap">Technology</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/world" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span className='text-2xl text-gray-300'><BiWorld /></span>
                                <span className="flex-1 ml-3 whitespace-nowrap">World</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/finance" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span className='text-2xl text-gray-300'><BiMoney /></span>
                                <span className="flex-1 ml-3 whitespace-nowrap">Finance</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/entertainment" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span className='text-2xl text-gray-300'><SiDcentertainment /></span>
                                <span className="flex-1 ml-3 whitespace-nowrap">Entertainment</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/science" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span className='text-2xl text-gray-300'><MdScience /></span>
                                <span className="flex-1 ml-3 whitespace-nowrap">Science</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/gaming" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <span className='text-2xl text-gray-300'><FaGamepad /></span>
                                <span className="flex-1 ml-3 whitespace-nowrap">Gaming</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
            <header className="text-gray-600 fixed top-0 w-full body-font bg-gray-900">
                <div className="container mx-auto flex flex-wrap p-4 flex-row items-center">
                    <span onClick={toggleNav} className='text-3xl text-white md:hidden block cursor-pointer'><HiMenuAlt1 /></span>
                    <Link href={'/'} className="flex title-font font-medium items-center text-gray-900 md:mb-0 cursor-pointer mr-16">
                        <span className='text-5xl text-red-500'><TiNews /></span>
                        <span className="text-white ml-3 text-xl">TrendLines</span>
                    </Link>
                    <nav className="md:ml-auto md:flex flex-wrap items-center text-base justify-center space-x-6 mr-10 hidden">
                        <Link href={'/sports'} className="hover:text-red-500 font-bold cursor-pointer text-white transition-colors duration-300">Sports</Link>
                        <Link href={'/technology'} className="hover:text-red-500 font-bold cursor-pointer text-white transition-colors duration-300">Technology</Link>
                        <Link href={'/world'} className="hover:text-red-500 font-bold cursor-pointer text-white transition-colors duration-300">World</Link>
                        <Link href={'/finance'} className="hover:text-red-500 font-bold cursor-pointer text-white transition-colors duration-300">Finance</Link>
                        <Link href={'/entertainment'} className="hover:text-red-500 font-bold cursor-pointer text-white transition-colors duration-300">Entertainment</Link>
                        <Link href={'/science'} className="hover:text-red-500 font-bold cursor-pointer text-white transition-colors duration-300">Science</Link>
                        <Link href={'/gaming'} className="hover:text-red-500 font-bold cursor-pointer text-white transition-colors duration-300">Gaming</Link>
                    </nav>
                    <form className='hidden md:block'>
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-white sr-only dark:text-white">Search</label>
                        <div className="relative right-2 w-72">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-white dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search News!" required />
                            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                    </form>
                </div>
            </header>
        </>
    )
}

export default Navbar