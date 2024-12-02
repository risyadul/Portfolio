<script setup lang="ts">
const experiences = [
  {
    id: 1,
    role: 'Software Engineer (Android & Fullstack)',
    company: 'Lion Parcel',
    period: 'Sep 2021 - Present',
    location: 'Jakarta Barat',
    description: 'Design and build native Android applications using Kotlin, and recently expanded into Fullstack Development with Go and Vue.js',
    achievements: [
      'Work closely with products and design team, QA team, and other engineers to deliver the products',
      'Working on main features i.e Payment (Integrated using Midtrans SDK and BE), Referral, Membership, Claim, Balance, Voucher (Integrated using Ultra Voucher), etc.',
      'Create custom reusable component according the Design Language System (DLS)',
      'Write Unit Tests using JUnit',
      'Write Technical Documentation',
      'Successfully Build a Trucking App From Scratch',
      'Increase crash-free on crashlytics to >= 99%',
      'Perform Code Review',
      'Enhanced and optimized booking shipment system interface',
      'Implemented responsive design for mobile view across all pages',
      'Revamped booking client interface for better user experience',
      'Developed new features including "Kirim & Menangkan" menu',
      'Enhanced multiple operational pages (Custom Status, List Station Transit In, List RTC)',
      'Improved booking cargo management interface',
      'Optimized page performance and user interactions',
      'Developed and enhanced RESTful APIs using Go',
      'Created API for POS integration with retry mechanism',
      'Implemented pre-generated JNE AWB system',
      'Developed complex filtering system for STT status management',
      'Created APIs for data export and download functionality',
      'Enhanced tracking system (V1 & V2) with external integration',
      'Optimized database queries and API performance',
    ],
    technologies: [
      'MVVM',
      'RxJava',
      'Dagger',
      'Firebase',
      'Push Notification',
      'Android Jetpack',
      'Google Maps API',
      'Geocoder',
      'Kotlin',
      'Go',
      'MySQL',
      'JavaScript',
      'TypeScript',
      'Vue.js',
      'Tailwind CSS',
      'RESTful API',
    ],
  },
  {
    id: 2,
    role: 'Software Engineer (Android)',
    company: 'PT Enigma Cipta Humanika',
    period: 'Mar 2020 - Sep 2021',
    location: 'Jakarta Selatan',
    description: 'Placement at Lion Parcel as Android Engineer (Vendor)',
    achievements: [
      'Design and build native Android applications using Kotlin',
      'Work closely with products and design team, QA team, and other engineers to deliver the products',
      'Working on main features i.e Pickup & Dropoff (Integrate Using Google Maps Api and Geocoder), Check Tariff, HomePage, Claim, Balance, etc.',
      'Increase crash-free on crashlytics to >= 97%',
      'Perform Code Review',
    ],
    technologies: [
      'MVVM',
      'RxJava',
      'Dagger',
      'Firebase',
      'Push Notification',
      'Android Jetpack',
      'Google Maps API',
      'Geocoder',
      'Kotlin',
    ],
  },
]
</script>

<template>
  <div class="space-y-12">
    <h1 class="text-3xl lg:text-4xl font-bold text-gray-900 text-center lg:text-left">Work Experience</h1>

    <div class="space-y-8 lg:space-y-12">
      <div
        v-for="exp in experiences"
        :key="exp.id"
        class="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <div class="flex flex-col lg:flex-row justify-between items-start gap-4 lg:gap-0 mb-4">
          <div>
            <h3 class="text-lg lg:text-xl font-bold text-gray-900">{{ exp.role }}</h3>
            <p class="text-base lg:text-lg text-gray-600">{{ exp.company }}</p>
          </div>
          <div class="text-left lg:text-right">
            <p class="text-gray-600">{{ exp.period }}</p>
            <p class="text-gray-500 text-sm">{{ exp.location }}</p>
          </div>
        </div>

        <p class="text-sm lg:text-base text-gray-600 mb-4">{{ exp.description }}</p>

        <div class="mb-6">
          <h4 class="text-sm font-semibold text-gray-700 mb-2">Key Achievements:</h4>
          <ul class="list-disc list-inside space-y-1 text-sm lg:text-base text-gray-600">
            <li v-for="achievement in exp.achievements" :key="achievement">
              {{ achievement }}
            </li>
          </ul>
        </div>

        <div class="flex flex-wrap gap-1.5 lg:gap-2">
          <span
            v-for="tech in exp.technologies"
            :key="tech"
            class="px-2 lg:px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs lg:text-sm"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
