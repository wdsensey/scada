import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import NotFound from '@/views/NotFound.vue';
import AddPost from '@/views/AddPost.vue';
import Modal from '@/components/Modal.vue';
import '@/assets/scss/style.scss';

Vue.use(VueRouter);
Vue.component('Modal', Modal);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { layout: 'default' },
  },
  {
    path: '/add-post',
    name: 'AddPost',
    component: AddPost,
    meta: { layout: 'default' },
  },
  {
    path: '*',
    component: NotFound,
    meta: { layout: 'no-footer' },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
