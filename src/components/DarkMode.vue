<script setup>
import { useDark, useToggle } from '@vueuse/core'
import CarbonMoon from '~icons/carbon/moon'
import CarbonSun from '~icons/carbon/sun'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
    <CarbonMoon v-if="isDark == true" @click="toggleDark()" id="darkIcon" style="font-size: 1.2rem;" />
    <CarbonSun v-else @click="toggleDark()" id="lightIcon" style="font-size: 1.2rem;" />
</template>