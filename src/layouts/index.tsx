import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar'

export default function Layout() {
  return (
    <div className="flex h-screen py-8 bg-bg">
      <div className="hidden md:flex">
        <Sidebar></Sidebar>
      </div>

      <div className="flex flex-col flex-grow h-full">
        <Outlet />
      </div>
    </div>
  )
}
