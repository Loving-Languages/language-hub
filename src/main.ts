import { createApp } from 'vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import i18n from '@/i18n';

import site from 'public/lang-hub.site';

import App from '@/App.vue';
import Home from '@/pages/Home.vue';

const routes : RouteRecordRaw[] = [
    { path: '/', component: Home }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

const app = createApp(App);

app.use(i18n);
app.use(router);
app.mount('#app');
