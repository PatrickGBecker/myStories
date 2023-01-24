import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HiMagnifyingGlass, HiBell } from 'react-icons/hi2';
import useAuth from '../hooks/useAuth';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const { logout } = useAuth()

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
        {/* left section */}
        <div className="flex items-center space-x-2 md:space-x-10">
            <img 
                src='https://rb.gy/ulxxee'
                width={100}
                height={100}
                className='cursor-pointer object-contain'
            />

            <ul className='hidden space-x-4 md:flex'>
                <li className='headerLink'>Home</li>
                <li className='headerLink'>Tv Shows</li>
                <li className='headerLink'>Movies</li>
                <li className='headerLink'>New & Popular</li>
                <li className='headerLink'>My List</li>
            </ul>
        </div>

        {/* Right section */}
        <div className='flex items-center space-x-4 text-sm font-light'>
            <HiMagnifyingGlass className='hidden h-6 w-6 sm:inline ' />
            <p className='hidden lg:inline'>Kids</p>
            <HiBell className='h-6 w-6' />
             <img 
                onClick={logout}
                src='https://rb.gy/g1pwyx'
                alt=''
                className='cursor-pointer rounded'
             />
            
        </div>
    </header>
  )
}

export default Header