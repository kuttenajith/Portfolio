<template>
    <div>
      <h1>Experience</h1>
      <ul>
        <li v-for="exp in experience" :key="exp.id">
          <h3>{{ exp.position }} at {{ exp.company }}</h3>
          <p>{{ exp.duration }}</p>
          <p>{{ exp.details }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        experience: [
          {
            id: 1,
            position: 'Frontend Developer',
            company: 'Tech Solutions',
            duration: '2020-2024',
            details: 'Worked on developing user interfaces and integrating micro front-ends.'
          },
          {
            id: 2,
            position: 'Golang Developer',
            company: 'Code Experts',
            duration: '2018-2020',
            details: 'Developed backend services using Golang.'
          }
        ]
      };
    }
  };
  </script>
  