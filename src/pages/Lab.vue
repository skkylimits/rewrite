<script setup>
import { reactive, ref } from 'vue'
import { useElementSize } from '@vueuse/core'

const el = ref(null)
const { width, height } = useElementSize(el)
</script>

<template>
  <div class="lab">
    <div class="container">
      <h1>Lab</h1>
      <div ref="el" class="element-size">
        Height: {{ height }}
        Width: {{ width }}
      </div>
      <section class="menus">
        <div class="containerx">
          <div class="menu-item" />
          <div class="menu-item" />
          <div class="menu-item" />
        </div>
      </section>
    </div>
  </div>
</template>

<style>
.lab {
    padding: 1rem;
    margin-left: 15rem;
}

.element-size {
    height: 20rem;
    width: 20rem;
    outline: #089462 solid 3px;
    resize: both;
    overflow: auto;
}
</style>
