import { createRouter, createWebHistory } from 'vue-router';
import About from '../components/About.vue';
import Projects from '../components/Projects.vue';
import Resume from '../components/Resume.vue';
import Contact from '../components/Contact.vue';
import Experience from '../components/Experience.vue';

const routes = [
  { path: '/about', component: About },
  { path: '/projects', component: Projects },
  { path: '/resume', component: Resume },
  { path: '/contact', component: Contact },
  { path: '/experience', component: Experience },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
