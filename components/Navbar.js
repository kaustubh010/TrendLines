import { React, useRef, useState } from 'react'
import { TiNews } from 'react-icons/ti'
import { HiMenuAlt1 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { GiNewspaper } from 'react-icons/gi'
import { FcSportsMode } from 'react-icons/fc'
import { GrTechnology } from 'react-icons/gr'
import { BiWorld, BiMoney } from 'react-icons/bi'
import { SiDcentertainment } from 'react-icons/si'
import { MdScience, MdOutlineHealthAndSafety } from 'react-icons/md'
import Link from 'next/link'

const Navbar = () => {
    const ref = useRef()
    const [isOpen, setIsOpen] = useState(false)

    const toggleNav = () => {
        setIsOpen(!isOpen)
        if (ref.current.classList.contains('-translate-x-full')) {
            ref.current.classList.remove('-translate-x-full')
            ref.current.classList.add('translate-x-0')
        } else {
            ref.current.classList.remove('translate-x-0')
            ref.current.classList.add('-translate-x-full')
        }
    }

    const closeNav = () => {
        setIsOpen(false)
        ref.current.classList.remove('translate-x-0')
        ref.current.classList.add('-translate-x-full')
    }

    const navItems = [
        { href: '/', label: 'Headlines', icon: GiNewspaper, color: 'text-blue-400' },
        { href: '/sports', label: 'Sports', icon: FcSportsMode, color: 'text-orange-400' },
        { href: '/technology', label: 'Technology', icon: GrTechnology, color: 'text-purple-400' },
        { href: '/world', label: 'World', icon: BiWorld, color: 'text-green-400' },
        { href: '/finance', label: 'Finance', icon: BiMoney, color: 'text-emerald-400' },
        { href: '/entertainment', label: 'Entertainment', icon: SiDcentertainment, color: 'text-pink-400' },
        { href: '/science', label: 'Science', icon: MdScience, color: 'text-cyan-400' },
        { href: '/health', label: 'Health', icon: MdOutlineHealthAndSafety, color: 'text-red-400' },
    ]

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div 
                    onClick={closeNav}
                    className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-30 transition-opacity duration-300"
                />
            )}

            {/* Mobile Sidebar */}
            <aside 
                ref={ref} 
                className="md:hidden fixed top-0 left-0 z-40 w-80 h-screen -translate-x-full transition-transform duration-300 ease-in-out"
            >
                <div className="flex flex-col h-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 shadow-2xl">
                    {/* Mobile Header */}
                    <div className="flex items-center justify-between p-6 border-b border-slate-700/50">
                        <div className="flex items-center space-x-3">
                            <span className='text-4xl text-red-500 drop-shadow-lg'><TiNews /></span>
                            <span className="text-white text-2xl font-bold tracking-tight">TrendLines</span>
                        </div>
                        <button 
                            onClick={toggleNav}
                            className='text-white hover:text-red-500 transition-colors duration-200 p-2 hover:bg-slate-700/50 rounded-lg'
                        >
                            <AiOutlineClose size={24} />
                        </button>
                    </div>

                    {/* Mobile Search */}
                    <div className="p-6 border-b border-slate-700/50">
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                    <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <input 
                                    type="search" 
                                    className="w-full py-3 pl-12 pr-4 text-sm text-white bg-slate-700/50 border border-slate-600 rounded-xl placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                                    placeholder="Search news..." 
                                />
                            </div>
                        </form>
                    </div>

                    {/* Mobile Navigation */}
                    <nav className="flex-1 overflow-y-auto py-4 px-4">
                        <ul className="space-y-1">
                            {navItems.map((item) => {
                                const Icon = item.icon
                                return (
                                    <li key={item.href}>
                                        <Link 
                                            href={item.href}
                                            onClick={closeNav}
                                            className="flex items-center p-4 text-white rounded-xl hover:bg-slate-700/50 transition-all duration-200 group"
                                        >
                                            <span className={`text-2xl ${item.color} group-hover:scale-110 transition-transform duration-200`}>
                                                <Icon />
                                            </span>
                                            <span className="ml-4 font-medium group-hover:text-red-400 transition-colors duration-200">
                                                {item.label}
                                            </span>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </div>
            </aside>

            {/* Desktop Header */}
            <header className="fixed top-0 w-full z-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-lg border-b border-slate-700/50 backdrop-blur-md">
                <div className="container mx-auto px-4">
                    <div className="flex items-center md:justify-between h-20">
                        {/* Mobile Menu Button */}
                        <button 
                            onClick={toggleNav}
                            className='text-white md:hidden p-2 hover:bg-slate-700/50 rounded-lg transition-colors duration-200'
                        >
                            <HiMenuAlt1 size={28} />
                        </button>

                        {/* Logo */}
                        <Link 
                            href={'/'} 
                            className="flex items-center space-x-3 group cursor-pointer"
                        >
                            <span className='text-5xl text-red-500 group-hover:scale-110 transition-transform duration-200 drop-shadow-lg'>
                                <TiNews />
                            </span>
                            <span className="text-white text-2xl font-bold tracking-tight group-hover:text-red-400 transition-colors duration-200">
                                TrendLines
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-1">
                            {navItems.slice(1).map((item) => (
                                <Link 
                                    key={item.href}
                                    href={item.href}
                                    className="relative px-4 py-2 text-white font-medium hover:text-red-400 transition-colors duration-200 group"
                                >
                                    {item.label}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
                                </Link>
                            ))}
                        </nav>

                        {/* Desktop Search */}
                        <form className='hidden md:block' onSubmit={(e) => e.preventDefault()}>
                            <div className="relative w-64 lg:w-72">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                    <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <input 
                                    type="search" 
                                    className="w-full py-2.5 pl-12 pr-4 text-sm text-white bg-slate-700/50 border border-slate-600 rounded-xl placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                                    placeholder="Search news..." 
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </header>

            {/* Spacer for fixed header */}
            <div className="h-20"></div>
        </>
    )
}

export default Navbar