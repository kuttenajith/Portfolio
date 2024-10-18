<template>
  <div>
    <header>
      <nav>
        <router-link to="/about">About</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/resume">Resume</router-link>
        <router-link to="/experience">Experience</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
      <ThemeToggle @toggleTheme="toggleTheme" />
    </header>
    <router-view />
  </div>
</template>

<script>

export default {
};
</script>

<style scoped>
</style>
