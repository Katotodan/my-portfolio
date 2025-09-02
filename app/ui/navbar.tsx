'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';



export default function Navbar() {
    const pathname = usePathname();
    const menuBtnRef = useRef<HTMLButtonElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                menuRef.current &&
                !menuRef.current.classList.contains('hidden') &&
                !menuRef.current.contains(event.target as Node) &&
                menuBtnRef.current &&
                !menuBtnRef.current.contains(event.target as Node)
            ) {
                closeMenu();
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
         // Close menu on route change (pathname change)
        if (menuRef.current && !menuRef.current.classList.contains('hidden')) {
            closeMenu();
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [pathname]);

    
    function closeMenu() {
        if (menuRef.current && menuRef.current.classList.contains('translate-x-0')) {
            menuRef.current.classList.remove('translate-x-0');
            menuRef.current.classList.add('translate-x-full');
            // Set the height of the body to auto to re-enable scrolling
            document.body.style.height = 'auto';
            document.body.style.overflow = 'auto';
        }
    }

    function toggleMenu() {
        if (menuRef.current) {
            if (menuRef.current.classList.contains('translate-x-full')) {
                menuRef.current.classList.remove('translate-x-full');
                menuRef.current.classList.add('translate-x-0');
                // Set the height of the body to 100vh and hide overflow to prevent background scrolling
                document.body.style.height = '100dvh';
                document.body.style.overflow = 'hidden';
            } else {
                menuRef.current.classList.remove('translate-x-0');
                menuRef.current.classList.add('translate-x-full');
                // Set the height of the body to auto to re-enable scrolling
                document.body.style.height = 'auto';
                document.body.style.overflow = 'auto';
            }
        }
    }
    return (
        <nav className="bg-gray-800  text-white relative w-full overflow-x-clip w-full md:px-10 lg:px-20"
        id='home-section'>
            <div className="px-4 py-3 flex items-center justify-between">
                <div className="text-2xl font-bold">
                    <Link href="/">
                    <Image
                        src="/logo-img.png" // Path to your logo image
                        alt="Logo"
                        width={40}
                        height={40} 
                        className="inline-block mr-2 rounded-full"
                    />
                    katotodan</Link>
                </div>
                <div className="hidden md:flex space-x-6 lg:space-x-10 text-white text-xl">
                    <Link href="#home-section" onClick={closeMenu} className="hover:text-blue-600">Home</Link>
                    <Link href="#about-section" className="hover:text-blue-600">About</Link>
                    <Link href="#project-section" className="hover:text-blue-600">Projects</Link>
                    <Link href="#contact-section" className="hover:text-blue-600">Contact</Link>
                </div>
                <div className="md:hidden text-2xl">
                    {/* Mobile menu button */}
                    <button
                        type="button"
                        className="focus:outline-none cursor-pointer"
                        aria-label="Open menu"
                        ref={menuBtnRef}
                        onClick={toggleMenu}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
            {/* Mobile menu */}
            
            <div id="mobile-menu" ref={menuRef}
            className="md:hidden fixed text-white bg-inherit w-full top-[64px] 
            z-50 left-0 h-[calc(100dvh-64px)] flex flex-col items-start py-6 space-y-2 text-xl
            transition-transform duration-300 ease-in-out translate-x-full overflow-x-auto">
                <Link href="#home-section" onClick={closeMenu} className="block w-full px-2 py-2 text-white hover:text-blue-600 text-center">Home</Link>
                <Link href="#about-section" onClick={closeMenu} className="block w-full px-2 py-2 text-white hover:text-blue-600 text-center">About</Link>
                <Link href="#project-section" onClick={closeMenu} className="block w-full px-2 py-2 text-white hover:text-blue-600 text-center">Projects</Link>
                <Link href="#contact-section" onClick={closeMenu} className="block w-full px-2 py-2 text-white hover:text-blue-600 text-center">Contact</Link>
            </div>
        </nav>
    );
}