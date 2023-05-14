import {
  CalendarIcon,
  Cog8ToothIcon,
  HomeIcon,
  UsersIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline'
import { Link, useLocation } from 'react-router-dom'

const navigation = [
  {
    name: '仪表盘',
    icon: HomeIcon,
    href: '/',
    pathName: 'Dashboard',
  },
  {
    name: '订单',
    icon: CalendarIcon,
    href: '/order',
    pathName: 'Order',
  },
  // {
  //   name: '管理员',
  //   icon: UsersIcon,
  //   href: '/admin',
  //   pathName: 'Admin',
  // },
  {
    name: '设置',
    icon: Cog8ToothIcon,
    href: '/settings',
    pathName: 'Settings',
  },
]
const UserInfo = () => (
  <div className="flex flex-col items-center mt-6">
    <img
      className="object-cover w-12 h-12 mx-2 rounded-full"
      src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
      alt="avatar"
    />
    <h4 className="mx-2 mt-2 text-base font-medium text-clear">Seven</h4>
    <p className="mx-2 mt-1 text-sm font-medium text-dull">seven@gmail.com</p>
  </div>
)

function Navigation() {
  const location = useLocation()
  return (
    <div className="flex flex-col justify-between flex-1">
      <div className="flex justify-center items-center h-full ">
        <nav className="-ml-4 space-y-4" aria-label="Sidebar">
          {navigation.map((item) => (
            <Link
              to={item.href}
              className="flex items-center mx-10 py-2 px-4 transition-colors duration-300 transform rounded-lg "
            >
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-md ${
                  location.pathname == item.href && 'bg-emerald-100'
                }`}
              >
                <item.icon className="w-5 h-5" aria-hidden="true" />
              </div>
              <span className="ml-2 font-medium ">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

const LoginOut = () => (
  <div className="flex flex-initial items-center justify-center mx-10 py-2 px-4 rounded-md bg-blue-100">
    <ArrowRightOnRectangleIcon className="w-5 h-5 text-dull hover:bg-emerald-100"></ArrowRightOnRectangleIcon>
    <span className="ml-3 text-base font-medium text-dull">退出</span>
  </div>
)

export default function Sidebar() {
  return (
    <>
      <div className="flex flex-col w-64 h-full px-4 py-8 border-duller border-r rtl:border-r-0 rtl:border-l">
        <UserInfo></UserInfo>

        <Navigation></Navigation>

        <LoginOut></LoginOut>
      </div>
    </>
  )
}
