<script setup lang="ts">
const skills = [
  'Android Development',
  'MVVM',
  'RxJava',
  'Kotlin',
  'Dagger',
  'Firebase',
  'JUnit',
  'Jetpack',
  'Git',
  'Google Maps Api',
  'Geocoder',
  'Go',
  'MySQL',
  'JavaScript',
  'Vue',
  'Tailwind CSS',
  'Jira',
]
</script>

<template>
  <div class="space-y-20">
    <!-- Hero Section -->
    <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
      <div class="flex-1 space-y-6 w-full text-center lg:text-left">
        <div class="space-y-2">
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900">RISYADULALIM</h1>
        </div>

        <p class="text-lg lg:text-xl text-gray-600 leading-relaxed">
          Software Engineer specializing in Android Development
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a
            href="https://github.com/risyadul"
            target="_blank"
            class="px-6 lg:px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/risyadul-alim-5410ab187/"
            target="_blank"
            class="px-6 lg:px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              />
            </svg>
            LinkedIn
          </a>
        </div>

        <!-- Contact Details -->
        <div class="pt-6 space-y-3 flex flex-col items-center lg:items-start">
          <div class="flex items-center gap-2 text-gray-600">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span>081211544408</span>
          </div>
          <div class="flex items-center gap-2 text-gray-600">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>risanjayy@gmail.com</span>
          </div>
          <div class="flex items-center gap-2 text-gray-600">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>Jakarta, Indonesia</span>
          </div>
        </div>
      </div>

      <div class="relative order-first lg:order-last">
        <div class="w-48 h-48 lg:w-64 lg:h-64">
          <img
            src="https://i.ibb.co.com/NVVHzrt/Screenshot-2024-12-02-at-20-43-15.png"
            alt="Profile Photo"
            class="w-full h-full rounded-full object-cover shadow-2xl"
          />
        </div>
      </div>
    </div>

    <!-- About Section -->
    <div class="space-y-6">
      <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 text-center lg:text-left">About Me</h2>
      <div class="bg-white rounded-2xl p-6 lg:p-8 shadow-lg">
        <p class="text-gray-600 leading-relaxed text-sm lg:text-base">
          As a Software Engineer with expertise in both Android Development and Fullstack Development, I have made significant
          contributions at Lion Parcel. My Android development skills include MVVM, RxJava, Kotlin, Dagger, Firebase, JUnit, 
          and Jetpack, while my fullstack capabilities encompass Go, Vue.js, TypeScript, and MySQL. I have successfully 
          delivered multiple mobile applications and web-based systems, demonstrating my ability to work across different 
          platforms and technologies. I am passionate about creating efficient, scalable solutions and continuously expanding 
          my technical expertise. My experience in both mobile and web development allows me to understand and implement 
          end-to-end solutions effectively. I am dedicated to writing clean, maintainable code and staying current with 
          industry best practices and emerging technologies.
        </p>
      </div>
    </div>

    <!-- Skills Section -->
    <div class="space-y-6">
      <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 text-center lg:text-left">Skills</h2>
      <div class="flex flex-wrap justify-center lg:justify-start gap-3 lg:gap-4">
        <div
          v-for="skill in skills"
          :key="skill"
          class="px-4 lg:px-6 py-2 lg:py-3 bg-white rounded-xl shadow-lg text-gray-800 text-sm lg:text-base hover:shadow-xl transition-shadow duration-300"
        >
          {{ skill }}
        </div>
      </div>
    </div>
  </div>
</template>
