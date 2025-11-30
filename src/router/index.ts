import { createRouter, createWebHashHistory } from 'vue-router'
import { staticRoutes } from './routes/staticRoutes';
import { configNProgress } from '@/utils/router';

// 创建router路由实例
export const router = createRouter({
  history: createWebHashHistory(),
  routes: staticRoutes 
});

/**
 * 初始化路由
 */
export function initializationRouter(): void {
  // 顶部进度条
  configNProgress();
  // 路由前置守卫
  // 路由后置守卫
}

