export type ProjectType = 'mobile' | 'web'

export interface Project {
  id: number
  title: string
  type?: ProjectType
  description: string
  technologies: string[]
  achievements: string[]
  /** Store/site URL, or the sentinels 'playstore-soon' / '#'. */
  demo?: string
  /** App Store URL, or the sentinel 'appstore-soon'. */
  appstore?: string
  /** Repo URL, or '#' when private. */
  github?: string
}

export const projects: Project[] = [
  {
    id: 9,
    title: 'Geopalm Mobile',
    type: 'mobile',
    description:
      'An offline-first field survey app for PTPN4 surveyors, built with Kotlin Multiplatform and Compose Multiplatform for Android and iOS — the KMP rewrite of the legacy ISPN mobile app under the GeoPalm product line.',
    technologies: [
      'Kotlin Multiplatform',
      'Compose Multiplatform',
      'Ktor',
      'SQLDelight',
      'Koin',
      'Clean Architecture',
      'Android',
      'iOS',
    ],
    demo: 'playstore-soon',
    appstore: 'appstore-soon',
    github: '#',
    achievements: [
      'Designed an offline-first architecture with SQLDelight persistence and a sync queue for background upload',
      'Integrated authentication against the PTPN4 ISPN API (NIK SAP + password) with per-platform token storage and Indonesian error handling',
      'Implemented field survey primitives — geofencing, camera capture, and location services via expect/actual platform APIs',
      'Shared a single Compose Multiplatform UI and design system (GeopalmTheme) across Android and iOS',
      'Structured dependency injection into modular Koin modules following Clean Architecture',
    ],
  },
  {
    id: 1,
    title: 'Inspire (ESS App)',
    type: 'mobile',
    description:
      'A multiplatform Employee Self Service application built with Kotlin Multiplatform and Compose Multiplatform for both Android and iOS platforms.',
    technologies: [
      'Kotlin Multiplatform',
      'Compose Multiplatform',
      'Clean Architecture',
      'Ktor Client',
      'SQLDelight',
      'Koin',
      'Firebase',
      'Google Maps',
    ],
    demo: 'https://play.google.com/store/apps/details?id=com.palmco.inspire&hl=id',
    appstore: 'appstore-soon',
    github: '#',
    achievements: [
      'Implemented Clean Architecture principles for maintainable and testable code',
      'Built cross-platform UI using Compose Multiplatform targeting both Android and iOS',
      'Integrated with multiple APIs (ESS, SawitGuard, Guyub, SAPA)',
      'Developed Monitoring Form with specialized field support',
      'Implemented type-safe SQL database operations with SQLDelight',
      'Configured Firebase Crashlytics for crash reporting and Firebase Messaging for push notifications',
      'Created responsive UI with Material Design Components',
    ],
  },
  {
    id: 2,
    title: 'DFarm App',
    type: 'mobile',
    description:
      'A Kotlin Multiplatform Mobile (KMM) application for digital farming operations, providing field data collection, attendance tracking, and farm management features for palm oil plantation operations.',
    technologies: [
      'Kotlin Multiplatform',
      'Compose Multiplatform',
      'Clean Architecture',
      'Ktor Client',
      'SQLDelight',
      'Koin',
      'Material 3',
      'Voyager',
    ],
    demo: 'playstore-soon',
    appstore: 'appstore-soon',
    github: '#',
    achievements: [
      'Implemented user authentication with role-based access control',
      'Developed location-based attendance tracking system',
      'Created field data collection forms (PB.24 for Harvest Data, PB.25 for Field Inspection)',
      'Built offline support with local data storage and synchronization',
      'Integrated Bluetooth printer support for forms and reports',
      'Designed responsive UI with Material 3 Design System and custom Dfarm branding',
      'Implemented Clean Architecture with MVVM pattern for maintainable code',
    ],
  },
  {
    id: 3,
    title: 'Lion Parcel - Consumer App',
    type: 'mobile',
    description:
      'A mobile application for Lion Parcel customers to track shipments, schedule pickups, and manage deliveries.',
    technologies: ['Kotlin', 'MVVM', 'RxJava', 'Dagger', 'Firebase', 'Android Jetpack', 'Google Maps API'],
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
    id: 4,
    title: 'Lion Parcel - Trucking App',
    type: 'mobile',
    description:
      'A dedicated mobile application for Lion Parcel drivers to manage pickup and delivery processes efficiently.',
    technologies: ['Kotlin', 'MVVM', 'RxJava', 'Dagger', 'Firebase', 'Android Jetpack', 'Barcode/QR Scanner'],
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
    id: 5,
    title: 'Genesis Mobile - Consolidator App',
    type: 'mobile',
    description:
      'An operational management application designed specifically for consolidators at Lion Parcel.',
    technologies: ['Kotlin', 'MVVM', 'RxJava', 'Dagger', 'Firebase', 'Android Jetpack', 'Data Encryption'],
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
    technologies: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'Go', 'MySQL', 'RESTful API'],
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
    id: 7,
    title: 'Simple Clock App',
    description:
      'A minimalist clock and timer application built with modern Android development practices, featuring real-time clock display and customizable timer functionality.',
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
    id: 8,
    title: 'Flutter Todo App',
    description:
      'A simple and modern Flutter todo application using Hive for data storage, implementing clean architecture principles and modern Flutter development practices.',
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
