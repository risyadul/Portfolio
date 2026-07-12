import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ExperienceView from '../views/ExperienceView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/projects', name: 'projects', component: ProjectsView },
    { path: '/experience', name: 'experience', component: ExperienceView },
    { path: '/contact', name: 'contact', component: ContactView },
  ],
})

export default router
