import type { AppRouteRecordRaw } from '@/utils/router';

/**
 * 静态路由配置
 * 
 */
export const staticRoutes: AppRouteRecordRaw[] = [
    // 登录页面
    {
        path: '/auth/login',
        name: 'Login',
        component: () => import('@/views/auth/login/index.vue'),
        meta: {
            title: 'menus.login.title',
            isHiddenTab: true
        }
    }
]