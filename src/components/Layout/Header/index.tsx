"use client";

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import { useAuth } from '@/context/AuthContext'
import Logo from '@/components/Layout/Header/Logo'
import { Icon } from '@iconify/react'
import { headerData } from './Navigation/menuData'
import Button from '@/components/Common/Button'

const Header: React.FC = () => {
  const pathUrl = usePathname()
  const { user, logout, loading } = useAuth()

  const [navbarOpen, setNavbarOpen] = useState(false)
  const [sticky, setSticky] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const userMenuRef = useRef<HTMLDivElement>(null)

  // Sticky navbar logic
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY >= 80)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menus on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLogout = async () => {
    await logout()
    setShowUserMenu(false)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-999 transition-all duration-300 ${sticky
          ? 'bg-background/80 backdrop-blur-md py-3 shadow-sm border-b border-border-default'
          : 'bg-transparent py-5'
          }`}
      >
        <div className='container mx-auto px-4 max-w-7xl'>
          <div className='flex items-center justify-between gap-4'>
            {/* Left: Logo */}
            <div className='flex-shrink-0'>
              <Logo />
            </div>

            {/* Center: Navigation */}
            <nav className='hidden lg:flex items-center justify-center space-x-8 flex-1'>
              {headerData.map((item, index) => {
                const isActive = pathUrl === item.href
                return (
                  <Link
                    key={index}
                    href={item.href}
                    className={`text-sm font-medium transition-colors hover:text-accent ${isActive
                      ? 'text-accent'
                      : sticky || pathUrl !== '/'
                        ? 'text-primary'
                        : 'text-white'
                      }`}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>

            {/* Right: Auth & Controls */}
            <div className='flex items-center gap-3'>
              <div className='hidden lg:flex items-center gap-4'>
                {loading ? (
                  <div className='animate-pulse flex gap-4'>
                    <div className='h-4 w-12 bg-border-default rounded'></div>
                    <div className='h-10 w-24 bg-border-default rounded-full'></div>
                  </div>
                ) : user ? (
                  <div className='relative' ref={userMenuRef}>
                    <button
                      onClick={() => setShowUserMenu(!showUserMenu)}
                      className='flex items-center gap-2 group'
                    >
                      <div className='w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-110'>
                        {user.photoURL ? (
                          <img src={user.photoURL} alt='Avatar' className='w-full h-full object-cover' />
                        ) : (
                          <div className='w-full h-full bg-accent flex items-center justify-center text-white font-bold'>
                            {(user.displayName || user.email)?.charAt(0).toUpperCase()}
                          </div>
                        )}
                      </div>
                    </button>

                    {showUserMenu && (
                      <div className='absolute right-0 mt-3 w-56 bg-card border border-border-default rounded-2xl shadow-xl py-2 animate-modal-in'>
                        <div className='px-4 py-3 border-b border-border-default mb-2'>
                          <p className='text-sm font-bold text-primary truncate'>
                            {user.displayName || 'User'}
                          </p>
                          <p className='text-xs text-secondary truncate'>{user.email}</p>
                        </div>
                        <Link
                          href='/booking'
                          className='block px-4 py-2.5 text-sm text-secondary hover:text-accent hover:bg-accent/5 transition-colors font-medium'
                        >
                          📅 Book a Session
                        </Link>
                        <Link
                          href='/support'
                          className='block px-4 py-2.5 text-sm text-secondary hover:text-accent hover:bg-accent/5 transition-colors font-medium'
                        >
                          🎫 Support Help
                        </Link>
                        <button
                          onClick={handleLogout}
                          className='w-full text-left px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors font-bold mt-2 border-t border-border-default'
                        >
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <>
                    <Link
                      href='/signin'
                      className={`text-sm font-bold transition-colors hover:text-accent ${sticky || pathUrl !== '/' ? 'text-primary' : 'text-white'
                        }`}
                    >
                      Sign In
                    </Link>
                    <Button variant='primary' size='md' href='/signup'>
                      Sign Up
                    </Button>
                  </>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setNavbarOpen(true)}
                className={`lg:hidden p-2 transition-transform active:scale-90 ${sticky || pathUrl !== '/' ? 'text-primary' : 'text-white'
                  }`}
              >
                <Icon icon='ci:hamburger' className='text-3xl' />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-999 transition-all duration-500 ${navbarOpen ? 'visible' : 'invisible'
          }`}
      >
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${navbarOpen ? 'opacity-100' : 'opacity-0'
            }`}
          onClick={() => setNavbarOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-[280px] bg-card shadow-2xl transition-transform duration-500 transform ${navbarOpen ? 'translate-x-0' : 'translate-x-full'
            } p-6 flex flex-col`}
        >
          <div className='flex items-center justify-between mb-10'>
            <Logo />
            <button
              onClick={() => setNavbarOpen(false)}
              className='p-2 hover:bg-accent/5 rounded-full transition-colors'
            >
              <Icon icon='ic:round-close' className='text-2xl text-primary' />
            </button>
          </div>

          <nav className='flex flex-col space-y-4 flex-1'>
            {headerData.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={() => setNavbarOpen(false)}
                className={`text-lg font-bold py-2 border-b border-border-default transition-colors ${pathUrl === item.href ? 'text-accent' : 'text-primary hover:text-accent'
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className='mt-auto space-y-4 pt-6 border-t border-border-default'>
            {user ? (
              <>
                <div className='flex items-center gap-3 mb-4 p-3 bg-accent/5 rounded-2xl'>
                  <div className='w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center overflow-hidden'>
                    {user.photoURL ? (
                      <img src={user.photoURL} alt='Avatar' className='w-full h-full object-cover' />
                    ) : (
                      <div className='w-full h-full bg-accent flex items-center justify-center text-white font-bold'>
                        {(user.displayName || user.email)?.charAt(0).toUpperCase()}
                      </div>
                    )}
                  </div>
                  <div className='overflow-hidden'>
                    <p className='text-sm font-bold text-primary truncate'>
                      {user.displayName || 'User'}
                    </p>
                    <p className='text-xs text-secondary truncate'>{user.email}</p>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className='w-full py-4 text-center text-red-500 bg-red-50 rounded-2xl font-bold transition-all active:scale-95'
                >
                  Logout
                </button>
              </>
            ) : (
              <div className='flex flex-col gap-3'>
                <Button variant='outline' className='w-full py-4' href='/signin' onClick={() => setNavbarOpen(false)}>
                  Sign In
                </Button>
                <Button variant='primary' className='w-full py-4' href='/signup' onClick={() => setNavbarOpen(false)}>
                  Sign Up Free
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
