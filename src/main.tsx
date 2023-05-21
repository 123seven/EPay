import React from 'react'
import { lazy, ReactNode, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom'

// 用懒加载实现优化
const Dashboard = lazy(() => import('./pages/dashboard'))
const Order = lazy(() => import('./pages/order'))
const Admin = lazy(() => import('./pages/admin'))
const Settings = lazy(() => import('./pages/settings'))
const Login = lazy(() => import('./pages/login'))

import Loyout from './layouts/index'

// 实现懒加载的用Suspense包裹 定义函数
const lazyLoad = (children: ReactNode): ReactNode => {
  return <Suspense fallback={<h1>Loading...</h1>}>{children}</Suspense>
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Loyout />,
    children: [
      {
        index: true,
        element: lazyLoad(<Dashboard />),
      },
      {
        path: '/Order',
        element: lazyLoad(<Order />),
      },
      {
        path: '/admin',
        element: lazyLoad(<Admin />),
      },
      {
        path: '/settings',
        element: lazyLoad(<Settings />),
      },
    ],
  },
  {
    path: '/login',
    element: lazyLoad(<Login />),
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
