<script setup>
import NavMenu from './components/parts/NavMenu.vue';
</script>

<template>
  <NavMenu />
  <div class="p-5">
    <router-view></router-view>
  </div>
</template>

<style scoped>
</style>
