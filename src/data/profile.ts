export interface SkillGroup {
  /** Gradle-style group name, rendered as a comment in the dependencies block. */
  name: string
  items: string[]
}

export const profile = {
  name: 'Risyadulalim',
  handle: 'risyadul',
  role: 'Software Engineer',
  tagline: 'Kotlin Multiplatform · Android · Fullstack',
  summary: 'I build cross-platform mobile apps and the services behind them.',
  location: 'Jakarta, Indonesia',
  email: 'risanjayy@gmail.com',
  phone: '081211544408',
  github: 'https://github.com/risyadul',
  linkedin: 'https://www.linkedin.com/in/risyadul-alim-5410ab187/',
  available: true,
  yearsExperience: 6,
  about: [
    'As a Software Engineer with expertise in Kotlin Multiplatform, Android Development, and Fullstack Development, I have made significant contributions across a range of production projects. My mobile work spans Kotlin Multiplatform, Compose Multiplatform, Clean Architecture, MVVM, Coroutines, Ktor, SQLDelight, Koin, and Firebase, while my fullstack capabilities cover Go, Vue.js, TypeScript, and MySQL.',
    'I have shipped multiple cross-platform applications for both Android and iOS, along with web-based systems — working comfortably across the whole stack. My recent work includes agricultural management apps with attendance tracking, harvest data collection, and area measurement with location integration.',
    'I care about efficient, scalable solutions and clean, maintainable code, and I keep expanding my toolkit as the platforms evolve.',
  ],
} as const

/**
 * Skills grouped by domain — drives the Gradle `dependencies { }` block on the
 * home page. Mirrors the way this stack is actually organized in a build file.
 */
export const skillGroups: SkillGroup[] = [
  {
    name: 'mobile',
    items: ['Kotlin', 'Kotlin Multiplatform', 'Compose Multiplatform', 'Android', 'iOS', 'Jetpack'],
  },
  {
    name: 'architecture',
    items: ['Clean Architecture', 'MVVM', 'Coroutines', 'RxJava', 'Koin', 'Dagger'],
  },
  {
    name: 'backend',
    items: ['Go', 'Ktor', 'MySQL', 'SQLDelight', 'Firebase', 'RESTful API'],
  },
  {
    name: 'web',
    items: ['Vue', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
  },
  {
    name: 'tooling',
    items: ['Git', 'JUnit', 'Google Maps API', 'Jira'],
  },
]
