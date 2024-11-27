<template>
  <div class="space-y-12">
    <h1 class="text-4xl font-bold text-gray-900">Projects</h1>

    <!-- Project Cards -->
    <div class="grid gap-8">
      <div
        v-for="project in projects"
        :key="project.id"
        class="bg-white rounded-xl shadow-lg overflow-hidden"
      >
        <div class="p-6">
          <!-- Project Header -->
          <h2 class="text-2xl font-bold text-gray-900">{{ project.title }}</h2>

          <!-- Description -->
          <p class="mt-4 text-gray-600">{{ project.description }}</p>

          <!-- Technologies -->
          <div class="mt-6">
            <h3 class="text-sm font-medium text-gray-900">Technologies Used</h3>
            <div class="mt-2 flex flex-wrap gap-2">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- Achievements -->
          <div class="mt-6">
            <h3 class="text-sm font-medium text-gray-900">Key Achievements</h3>
            <ul class="mt-2 list-disc list-inside text-gray-600 space-y-1">
              <li v-for="achievement in project.achievements" :key="achievement">
                {{ achievement }}
              </li>
            </ul>
          </div>

          <!-- Links -->
          <div class="mt-6 flex gap-4">
            <a
              :href="project.demo"
              target="_blank"
              class="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M17.928 9.628C17.837 9.399 15.611 5 12 5C8.388 5 6.162 9.399 6.072 9.628C6.017 9.766 6.017 9.924 6.072 10.062C6.162 10.291 8.389 14.69 12 14.69C15.611 14.69 17.837 10.291 17.928 10.062C17.982 9.924 17.982 9.766 17.928 9.628ZM12 13.69C9.108 13.69 7.122 10.163 7.072 10.062C7.122 9.961 9.108 6.434 12 6.434C14.892 6.434 16.878 9.961 16.928 10.062C16.878 10.163 14.892 13.69 12 13.69Z"
                />
                <path
                  d="M12 7.69c-1.286 0-2.332 1.046-2.332 2.332S10.714 12.354 12 12.354s2.332-1.046 2.332-2.332S13.286 7.69 12 7.69z"
                />
              </svg>
              View on PlayStore
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
