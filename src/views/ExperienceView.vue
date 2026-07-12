<script setup lang="ts">
import { experiences } from '@/data/experience'
import SectionHeader from '@/components/ui/SectionHeader.vue'
import ExperienceItem from '@/components/ExperienceItem.vue'
</script>

<template>
  <div>
    <SectionHeader
      path="experience"
      title='git log --author="Risyadul"'
      :meta="`${experiences.length} roles · since 2020`"
    />
    <div class="mt-9">
      <ExperienceItem
        v-for="(exp, i) in experiences"
        :key="exp.id"
        :exp="exp"
        :is-last="i === experiences.length - 1"
        v-reveal
      />
    </div>
  </div>
</template>
