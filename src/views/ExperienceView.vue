<script setup lang="ts">
const experiences = [
  {
    id: 1,
    role: 'Software Engineer (Android)',
    company: 'Lion Parcel',
    period: 'Sep 2021 - Present',
    location: 'Jakarta Barat',
    description: 'Design and build native Android applications using Kotlin',
    achievements: [
      'Work closely with products and design team, QA team, and other engineers to deliver the products',
      'Working on main features i.e Payment (Integrated using Midtrans SDK and BE), Referral, Membership, Claim, Balance, Voucher (Integrated using Ultra Voucher), etc.',
      'Create custom reusable component according the Design Language System (DLS)',
      'Write Unit Tests using JUnit',
      'Write Technical Documentation',
      'Successfully Build a Trucking App From Scratch',
      'Increase crash-free on crashlytics to >= 99%',
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
    <h1 class="text-4xl font-bold text-gray-900">Work Experience</h1>

    <div class="space-y-12">
      <div
        v-for="exp in experiences"
        :key="exp.id"
        class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <div class="flex justify-between items-start mb-4">
          <div>
            <h3 class="text-xl font-bold text-gray-900">{{ exp.role }}</h3>
            <p class="text-lg text-gray-600">{{ exp.company }}</p>
          </div>
          <div class="text-right">
            <p class="text-gray-600">{{ exp.period }}</p>
            <p class="text-gray-500 text-sm">{{ exp.location }}</p>
          </div>
        </div>

        <p class="text-gray-600 mb-4">{{ exp.description }}</p>

        <div class="mb-6">
          <h4 class="text-sm font-semibold text-gray-700 mb-2">Key Achievements:</h4>
          <ul class="list-disc list-inside space-y-1 text-gray-600">
            <li v-for="achievement in exp.achievements" :key="achievement">
              {{ achievement }}
            </li>
          </ul>
        </div>

        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in exp.technologies"
            :key="tech"
            class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
