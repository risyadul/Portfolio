<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const navLinks = ['Home', 'Projects', 'Experience']
const isMenuOpen = ref(false)
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto">
      <div class="flex flex-col lg:flex-row">
        <!-- Mobile Navigation -->
        <div class="lg:hidden bg-white shadow-md p-4">
          <div class="flex justify-between items-center">
            <h2 class="text-2xl font-bold text-gray-800">Portfolio</h2>
            <button @click="isMenuOpen = !isMenuOpen" class="text-gray-600">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
          <transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="transform -translate-y-4 opacity-0"
            enter-to-class="transform translate-y-0 opacity-100"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="transform translate-y-0 opacity-100"
            leave-to-class="transform -translate-y-4 opacity-0"
          >
            <nav v-show="isMenuOpen" class="mt-4">
              <transition-group
                enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="transform -translate-x-4 opacity-0"
                enter-to-class="transform translate-x-0 opacity-100"
                leave-active-class="transition-all duration-200 ease-in"
                leave-from-class="transform translate-x-0 opacity-100"
                leave-to-class="transform -translate-x-4 opacity-0"
                class="space-y-2"
              >
                <RouterLink
                  v-for="(link, index) in navLinks"
                  :key="link"
                  :to="link === 'Home' ? '/' : `/${link.toLowerCase()}`"
                  class="block py-2 px-4 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-50 transition-all duration-200"
                  :class="{
                    'text-gray-900 bg-gray-50 font-medium': $route.path === (link === 'Home' ? '/' : `/${link.toLowerCase()}`)
                  }"
                  :style="{ transitionDelay: `${index * 50}ms` }"
                  @click="isMenuOpen = false"
                >
                  {{ link }}
                </RouterLink>
              </transition-group>
            </nav>
          </transition>
        </div>

        <!-- Desktop Sidebar -->
        <aside class="hidden lg:block w-72 min-h-screen bg-white shadow-xl fixed">
          <div class="p-8">
            <h2 class="text-3xl font-bold text-gray-800">Portfolio</h2>
            <p class="text-gray-500 mt-2">Android Developer</p>
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
        </aside>

        <!-- Main Content -->
        <main class="flex-1 lg:ml-72 p-4 lg:p-12">
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
