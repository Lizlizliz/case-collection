import VueRouter from 'vue-router';
import layout from '@/views/layout.vue';
import swiper from '@/views/content/swiper.vue'
const router = new VueRouter({
  mode: 'history', // 去掉 #，
  routes: [
    {
      path: 'manage',
      component: layout,
      children: [
        {
          name: '轮播图',
          path: '/content/swiper',
          component: swiper,
        }
      ]
    },
    {
      name: '案例合集',
      path: '*',
      redirect: '/content/swiper',
  }
  ]
})

export default router;