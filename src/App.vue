<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

const navLinks = ['Home', 'Projects', 'Experience']
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto">
      <div class="flex">
        <!-- Sidebar Navigation -->
        <aside class="w-72 min-h-screen bg-white shadow-xl fixed">
          <div class="p-8">
            <h2 class="text-3xl font-bold text-gray-800">Portfolio</h2>
            <p class="text-gray-500 mt-2">Web Developer</p>
          </div>
          <nav class="mt-8">
            <RouterLink
              v-for="link in navLinks"
              :key="link"
              :to="link === 'Home' ? '/' : `/${link.toLowerCase()}`"
              class="block px-8 py-4 text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200 border-l-4 border-transparent"
              :class="{
                'bg-gray-50 text-gray-900 border-gray-900 font-medium':
                  $route.path === (link === 'Home' ? '/' : `/${link.toLowerCase()}`),
              }"
            >
              {{ link }}
            </RouterLink>
          </nav>

          <!-- Social Links -->
          <div class="absolute bottom-0 w-full p-8">
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-gray-900 transition-colors duration-200">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-900 transition-colors duration-200">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </aside>

        <!-- Main Content -->
        <main class="flex-1 ml-72 p-12">
          <div class="max-w-4xl">
            <RouterView v-slot="{ Component }">
              <transition name="page" mode="out-in" appear>
                <component :is="Component" />
              </transition>
            </RouterView>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>
