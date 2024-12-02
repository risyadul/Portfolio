<template>
  <div class="space-y-12">
    <h1 class="text-3xl lg:text-4xl font-bold text-gray-900 text-center lg:text-left">Projects</h1>

    <!-- Project Cards -->
    <div class="grid gap-6 lg:gap-8">
      <div
        v-for="project in projects"
        :key="project.id"
        class="bg-white rounded-xl shadow-lg overflow-hidden"
      >
        <div class="p-4 lg:p-6">
          <!-- Project Header -->
          <h2 class="text-xl lg:text-2xl font-bold text-gray-900">{{ project.title }}</h2>

          <!-- Description -->
          <p class="mt-3 lg:mt-4 text-sm lg:text-base text-gray-600">{{ project.description }}</p>

          <!-- Technologies -->
          <div class="mt-4 lg:mt-6">
            <h3 class="text-sm font-medium text-gray-900">Technologies Used</h3>
            <div class="mt-2 flex flex-wrap gap-1.5 lg:gap-2">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="px-2 lg:px-3 py-1 text-xs lg:text-sm bg-gray-100 text-gray-700 rounded-full"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- Achievements -->
          <div class="mt-4 lg:mt-6">
            <h3 class="text-sm font-medium text-gray-900">Key Achievements</h3>
            <ul class="mt-2 list-disc list-inside text-sm lg:text-base text-gray-600 space-y-1">
              <li v-for="achievement in project.achievements" :key="achievement">
                {{ achievement }}
              </li>
            </ul>
          </div>

          <!-- Links -->
          <div class="mt-4 lg:mt-6 flex flex-wrap gap-3 lg:gap-4">
            <a
              v-if="project.demo !== '#'"
              :href="project.demo"
              target="_blank"
              class="inline-flex items-center px-3 lg:px-4 py-2 text-sm border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-200"
            >
              <svg 
                v-if="project.type === 'web'" 
                class="w-4 lg:w-5 h-4 lg:h-5 mr-2" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
              <svg 
                v-else 
                class="w-4 lg:w-5 h-4 lg:h-5 mr-2" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.799 2.196a1 1 0 0 1-.439 1.148l-2.674 1.552-2.731-2.731 2.731-2.731 2.674 1.552a1 1 0 0 1 .439 1.21zM13.892 9.555l2.302-2.302-10.937-6.333 8.635 8.635z"/>
              </svg>
              {{ project.type === 'web' ? 'Visit Website' : 'View on PlayStore' }}
            </a>
            <a
              v-if="project.github !== '#'"
              :href="project.github"
              target="_blank"
              class="inline-flex items-center px-3 lg:px-4 py-2 text-sm border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-200"
            >
              <svg class="w-4 lg:w-5 h-4 lg:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const projects = [
  {
    id: 1,
    title: 'Lion Parcel - Consumer App',
    type: 'mobile',
    description:
      'A mobile application for Lion Parcel customers to track shipments, schedule pickups, and manage deliveries.',
    image: '/lion-parcel.png',
    technologies: [
      'Kotlin',
      'MVVM',
      'RxJava',
      'Dagger',
      'Firebase',
      'Android Jetpack',
      'Google Maps API',
    ],
    demo: 'https://play.google.com/store/apps/details?id=com.lionparcel.services.consumer',
    github: '#',
    achievements: [
      'Successfully integrated payment system using Midtrans SDK',
      'Implemented key features including Referral, Membership, Balance, and Voucher systems',
      'Increased crash-free rate to ≥99% on Crashlytics',
      'Created reusable components following Design Language System (DLS)',
      'Wrote comprehensive unit tests and technical documentation',
    ],
  },
  {
    id: 2,
    title: 'Lion Parcel - Trucking App',
    type: 'mobile',
    description:
      'A dedicated mobile application for Lion Parcel drivers to manage pickup and delivery processes efficiently.',
    image: '/lion-parcel-trucking.png',
    technologies: [
      'Kotlin',
      'MVVM',
      'RxJava',
      'Dagger',
      'Firebase',
      'Android Jetpack',
      'Barcode/QR Scanner',
    ],
    demo: 'https://play.google.com/store/apps/details?id=com.lionparcel.trucking',
    github: '#',
    achievements: [
      'Built the Trucking App from scratch',
      'Implemented barcode/QR scanning for STT/Manifest processing',
      'Developed batch processing for multiple package drops',
      'Created efficient check-in system for hub deliveries',
      'Integrated real-time package tracking and status updates',
    ],
  },
  {
    id: 3,
    title: 'Genesis Mobile - Consolidator App',
    type: 'mobile',
    description:
      'An operational management application designed specifically for consolidators at Lion Parcel.',
    image: '/genesis-mobile.png',
    technologies: [
      'Kotlin',
      'MVVM',
      'RxJava',
      'Dagger',
      'Firebase',
      'Android Jetpack',
      'Data Encryption',
    ],
    demo: 'https://play.google.com/store/apps/details?id=com.lionparcel.genesis.mobile',
    github: '#',
    achievements: [
      'Developed secure data handling with encryption for sensitive operational data',
      'Implemented STT adjustment feature for better operational flexibility',
      'Created efficient consolidator management system',
      'Integrated with core Lion Parcel services',
      'Built robust error handling and data validation systems',
    ],
  },
  {
    id: 6,
    title: 'Lion Parcel - Internal Booking System',
    type: 'web',
    description:
      'A comprehensive internal web application for managing shipment bookings, tracking, and operational processes at Lion Parcel.',
    image: '/booking-system.png',
    technologies: [
      'Vue.js',
      'TypeScript',
      'Tailwind CSS',
      'Go',
      'MySQL',
      'RESTful API',
    ],
    demo: 'https://genesis.lionparcel.com/',
    github: '#',
    achievements: [
      'Enhanced booking shipment system with improved user interface and functionality',
      'Developed responsive mobile view for better accessibility',
      'Created new "Kirim & Menangkan" feature module',
      'Implemented complex filtering and management system for STT status',
      'Built RESTful APIs for POS integration and JNE AWB pre-generation',
      'Optimized database queries and API performance for better system response',
      'Enhanced tracking system with external service integration',
      'Developed data export and download functionality for operational reports',
    ],
  },
  {
    id: 4,
    title: 'Simple Clock App',
    description:
      'A minimalist clock and timer application built with modern Android development practices, featuring real-time clock display and customizable timer functionality.',
    image: '/simple-clock.png',
    technologies: [
      'Kotlin',
      'Jetpack Compose',
      'Clean Architecture',
      'MVVM',
      'Coroutines & Flow',
      'Material3',
      'Koin DI',
    ],
    demo: '#',
    github: 'https://github.com/risyadul/simple-clock-jc',
    achievements: [
      'Implemented Clean Architecture with MVVM pattern',
      'Built modern UI using Jetpack Compose and Material3 Design',
      'Created persistent background timer service with notifications',
      'Developed responsive design that adapts to different screen sizes',
      'Utilized Kotlin StateFlow for unidirectional data flow',
    ],
  },
  {
    id: 5,
    title: 'Flutter Todo App',
    description:
      'A simple and modern Flutter todo application using Hive for data storage, implementing clean architecture principles and modern Flutter development practices.',
    image: '/flutter-todo.png',
    technologies: [
      'Flutter',
      'Dart',
      'Hive Database',
      'Clean Architecture',
      'BLoC Pattern',
      'Unit Testing',
      'Cross-platform',
    ],
    demo: '#',
    github: 'https://github.com/risyadul/Flutter-Simple-Todo-Apps',
    achievements: [
      'Implemented Clean Architecture for better code organization and maintainability',
      'Utilized Hive for efficient local data storage',
      'Created cross-platform support for Android, iOS, and Web',
      'Built reusable UI components following Flutter best practices',
      'Implemented comprehensive data models and repositories',
    ],
  },
]
</script>
