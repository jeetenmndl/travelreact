import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <>
    app layout <br />
    <Outlet />
    </>
  )
}

export default AppLayout