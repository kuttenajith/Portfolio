<template>
    <div>
      <h1>Projects</h1>
      <ul>
        <li v-for="project in projects" :key="project.id">{{ project.title }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        projects: [
          { id: 1, title: 'Portfolio Website' },
          { id: 2, title: 'E-commerce App' }
        ]
      };
    }
  };
  </script>
  