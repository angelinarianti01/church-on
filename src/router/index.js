import { createRouter, createWebHistory } from 'vue-router';
import DepartmentView from '../views/DepartmentView.vue';
import DepartmentDetailsView from '../views/DepartmentDetailsView.vue';
import RosterView from '../views/RosterView.vue';
import RosterDetailsView from '../views/RosterDetailsView';
import ServiceView from '../views/ServiceView.vue';
import ServiceDetailsView from '../views/ServiceDetailsView';

const routes = [
  {
    path: '/',
    name: 'home',
    component: DepartmentView,
  },
  {
    path: '/department',
    name: 'department',
    component: DepartmentView,
  },
  {
    path: '/department/:id',
    name: 'department-details',
    component: DepartmentDetailsView,
  },
  {
    path: '/roster',
    name: 'roster',
    component: RosterView,
  },
  {
    path: '/roster/:id',
    name: 'roster-details',
    component: RosterDetailsView,
  },
  {
    path: '/service',
    name: 'service',
    component: ServiceView,
  },
  {
    path: '/service/:id',
    name: 'service-details',
    component: ServiceDetailsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  mode: 'history',
});

export default router;
