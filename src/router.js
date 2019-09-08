import Vue from 'vue'
import Router from 'vue-router'
//import DefaultLayout from './layouts/Default.vue'
// import About from './views/About.vue'
import Main from './layouts/Main.vue'
// import Blog from './views/Blog.vue'
// import Gallery from './views/Gallery.vue'
// import Music from './views/Music.vue'
// import Plugins from './views/Plugins.vue'
// import Search from './views/Search.vue'
// import qq from './views/qq.vue'
// import wechat from './views/wechat.vue'
// import picpages from './views/pic_pages.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: 
      Main,
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('./views/Home.vue')
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('./views/About.vue')
        },
        {
          path: '/blog',
          name: 'blog',
          component: () => import('./views/Blog.vue')
        },
        {
          path: '/blog/:pagename',
          name: 'blog_pages',
          component: () => import('./views/blog_pages.vue')
        },
        {
          path: '/gallery',
          name: 'gallery',
          component: () => import('./views/Gallery.vue'),    
        },
        {
          path: '/pic_pages/:picname',
          name: 'pic_pages',
          component: () => import('./views/pic_pages.vue'),
        },

        {
          path: '/music',
          name: 'music',
          component: () => import('./views/Music.vue')
        },
        {
          path: '/plugins',
          name: 'plugins',
          component: () => import('./views/Plugins.vue')
        },
        {
          path: '/search',
          name: 'search',
          component: () => import('./views/Search.vue')
        },
        {
          path: '/qq',
          name: 'qq',
          component: () => import('./views/qq.vue')
        },
        {
          path: '/wechat',
          name: 'wechat',
          component: () => import('./views/wechat.vue')
        },
        
      ]
    },

    {
      path: '/admin/',
      name: 'admin',
      component: () => import('./layouts/blog_admin.vue'),
      children:[
            {
              path: '/admin/change_published_artical/:pagename',
              name: 'change_published_artical',
              component: () => import('./views/admin/change_published_artical.vue')
            },
            {
              path: '/admin/change_draft_artical/:pagename',
              name: 'change_draft_artical',
              component: () => import('./views/admin/change_draft_artical.vue')
            },
            {
              path: '/admin/new_artical',
              name: 'new_artical',
              component: () => import('./views/admin/new_artical.vue')
            },        
      ]
    },

    {
          path: '/admin/login',
          name: 'login',
          component: () => import('./layouts/login.vue')
    }, 

    {
        path: '*',
        name: '404',
        component: () => import('./layouts/404.vue')
    },


    //{
      //insert a new router
    //}
  ]
})
