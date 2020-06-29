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
    }
  ]
})

export default router;
// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
