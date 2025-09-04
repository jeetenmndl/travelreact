import React from 'react'
import { Button } from '../ui/button'
import { NavLink } from 'react-router-dom'
import useAuth from '@/hooks/useAuth';

const AppNavbar = () => {
    const {logout} = useAuth();
  return (
    <header className='flex items-center justify-between py-4 px-8 border-b'>
        <div className='flex items-center gap-4'>
            <img src="/logo.png" alt="logo" className='h-10 w-10' />
            <h1 className='text-2xl font-bold'>Wander Wise</h1>
        </div>

        <div className='flex gap-10'>
            <nav className='flex items-center gap-8 [&>a]:hover:underline font-medium text-gray-800'>
                <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'text-primary font-semibold underline' : ''}>Dashboard</NavLink>

                <NavLink to="/trips" className={({ isActive }) => isActive ? 'text-primary font-semibold underline' : ''}>Trips</NavLink>

                <NavLink to="/itineraries" className={({ isActive }) => isActive ? 'text-primary font-semibold underline' : ''}>Itineraries</NavLink>
                
                <NavLink to="/packing" className={({ isActive }) => isActive ? 'text-primary font-semibold underline' : ''}>Packing List</NavLink>
            </nav>
            <div>
                <Button variant="outline" onClick={logout}>Logout</Button>

            </div>
        </div>
    </header>
  )
}

export default AppNavbar