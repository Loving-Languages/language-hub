import { createApp } from 'vue';
import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import i18n from '@/i18n';

import site from 'public/lang-hub.site';

import App from '@/App.vue';
import Home from '@/pages/Home.vue';
import Resources from '@/pages/Resources.vue';

const routes : RouteRecordRaw[] = [
    { path: '/', component: Home },
    { path: '/resources', component: Resources }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App);

app.use(i18n);
app.use(router);
app.mount('#app');
