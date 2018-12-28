import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/index'
            // redirect: '/login'
        },
        {
            path: '/',
            component: resolve => require(['../components/common/index.vue'], resolve),
            children: [
                {
                    path: '',
                    component: resolve => require(['../components/common/about.vue'], resolve)
                },
                {
                    path: '/1-1',
                    component: resolve => require(['../components/page/product-release.vue'], resolve)
                },
                {
                    path: '/1-2',
                    component: resolve => require(['../components/page/product-exchange.vue'], resolve)
                },
                {
                    path: '/2-1',
                    component: resolve => require(['../components/page/userScore.vue'], resolve)
                },
                {
                    path: '/2-2',
                    component: resolve => require(['../components/page/scoreCalculate.vue'], resolve)
                },
                {
                    path: '/2-3',
                    component: resolve => require(['../components/page/userScoreDetail.vue'], resolve)
                },
                {
                    path: '/3-1',
                    component: resolve => require(['../components/page/userManage.vue'], resolve)
                },
                {
                    path: '/3-2',
                    component: resolve => require(['../components/page/saleManage.vue'], resolve)
                }
            ]
        },
        {
            path: '/addproduct',
            component: resolve => require(['../components/page/form-add/add-product.vue'], resolve)
        },
        {
            path: '/adduser',
            component: resolve => require(['../components/page/form-add/add-user.vue'], resolve)
        },
        {
            path: '/addsale',
            component: resolve => require(['../components/page/form-add/add-sale.vue'], resolve)
        },
        {
            path: '/login',
            component: resolve => require(['../components/common/login.vue'], resolve)
        },
        {
            path: '/index',
            component: resolve => require(['../components/e-mall/telecom/index.vue'], resolve),
            children: [
                {
                    path: '/home',
                    component: resolve => require(['../components/e-mall/telecom/homepage.vue'], resolve)
                },
                {
                    path: '/exchange',
                    component: resolve => require(['../components/e-mall/telecom/exchange.vue'], resolve)
                },
                {
                    path: '/mine',
                    component: resolve => require(['../components/e-mall/telecom/mine.vue'], resolve)
                },
            ]
        }
    ]
})
