import Link from 'next/link';
import myStoriesUserIcon from '../public/my-stories-user-icon.png'
import myStoriesLogo from '../public/my-stories-logo.png'
import { useEffect, useState } from 'react';
import { HiMagnifyingGlass, HiBell } from 'react-icons/hi2';
import useAuth from '../hooks/useAuth';
import Image from 'next/image';
import BasicMenu from './BasicMenu';

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
    <header className={`${isScrolled && 'bg-[#226400]'}`}>
        {/* left section */}
        <div className="flex items-center space-x-2 md:space-x-10">
            <Image 
                src={myStoriesLogo}
                width={150}
                height={40}
                className='cursor-pointer object-contain shadow-md'
            />

            <BasicMenu />

            <ul className='hidden space-x-4 md:flex'>
                <li className='headerLink cursor-default font-semibold text-white hover:text-white'>
                Home
                </li>
                <li className='headerLink'>Tv Shows</li>
                <li className='headerLink'>Movies</li>
                <li className='headerLink'>New & Popular</li>
                <li className='headerLink'>My List</li>
            </ul>
        </div>

        {/* Right section */}
        <div className='flex items-center space-x-4 text-sm font-light'>
            <HiMagnifyingGlass className='hidden h-6 w-6 sm:inline ' />
            <p className='hidden lg:inline'>Children</p>
            <HiBell className='h-6 w-6' />
            <Link href='/account'>
                <div>
                    <Image
                        src={myStoriesUserIcon}
                        width={40}
                        height={40}
                        alt='user icon is smiley face with blue and green gradient'
                        className='cursor-pointer rounded'
                    />
                </div>
            </Link> 
        </div>
    </header>
  )
}

export default Header