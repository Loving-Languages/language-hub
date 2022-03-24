import { createApp } from 'vue';
import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import i18n from '@/i18n';

import App from '@/App.vue';
import Home from '@/pages/Home.vue';
import Resources from '@/pages/Resources.vue';
import Contributing from '@/pages/Contributing.vue';

const routes : RouteRecordRaw[] = [
    { path: '/', component: Home },
    { path: '/resources/:resource(.*)?', component: Resources },
    { path: '/contributing', component: Contributing }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App);

app.use(i18n);
app.use(router);
app.mount('#app');
