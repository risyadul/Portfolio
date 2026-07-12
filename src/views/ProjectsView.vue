<script setup lang="ts">
import { projects } from '@/data/projects'
import SectionHeader from '@/components/ui/SectionHeader.vue'
import ProjectCard from '@/components/ProjectCard.vue'

const shipped = projects.filter((p) => p.demo?.startsWith('http')).length
</script>

<template>
  <div>
    <SectionHeader
      path="projects"
      title="Selected work"
      :meta="`${projects.length} repositories · ${shipped} shipped`"
    />
    <div class="mt-8 grid items-start gap-5 lg:grid-cols-2">
      <ProjectCard
        v-for="(p, i) in projects"
        :key="p.id"
        :project="p"
        v-reveal="{ delay: (i % 2) * 80 }"
      />
    </div>
  </div>
</template>
