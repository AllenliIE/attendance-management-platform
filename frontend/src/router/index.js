import { createRouter, createWebHashHistory } from 'vue-router'
import NotFound from '../views/NotFound.vue'
import SignIn from '../views/SignIn.vue'
import AttendancePage from '../views/attendance/AttendancePage.vue'
import AdminPage from '../views/admin/AdminPage.vue'

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/attendance'
  },
  {
    path: '/signin',
    name: 'sign-in',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'sign-up',
    component: () => import('../views/SignUp.vue') //動態載入頁面
  },
  {
    path: '/attendance',
    name: 'attendance',
    component: AttendancePage
  },
  {
    path: '/attendance/profile',
    name: 'attendance-profile',
    component: () => import('../views/attendance/ProfilePage.vue') //動態載入頁面
  },
  {
    path: '/attendance/reader',
    name: 'attendance-reader',
    component: () => import('../views/attendance/ReaderPage.vue') //動態載入頁面
  },
    {
    path: '/attendance/checkin',
    name: 'attendance-checkin',
    component: () => import('../views/attendance/CheckInPage.vue') //動態載入頁面
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminPage
  },
  {
    path: '/admin/profile',
    name: 'admin-profile',
    component: () => import('../views/admin/ProfilePage.vue') //動態載入頁面
  },
  {
    path: '/admin/qrcode',
    name: 'admin-qrcode',
    component: () => import('../views/admin/QRCodePage.vue') //動態載入頁面
  },
  {
    path: '/admin/table',
    name: 'admin-table',
    component: () => import('../views/admin/TablePage.vue') //動態載入頁面
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
