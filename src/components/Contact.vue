<template>
    <div>
      <h1>Contact Me</h1>
      <form @submit.prevent="submitForm">
        <label for="name">Name</label>
        <input v-model="form.name" type="text" id="name" required />
  
        <label for="email">Email</label>
        <input v-model="form.email" type="email" id="email" required />
  
        <label for="message">Message</label>
        <textarea v-model="form.message" id="message" required></textarea>
  
        <button type="submit">Send</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: ''
        }
      };
    },
    methods: {
      submitForm() {
        console.log('Form submitted:', this.form);
      }
    }
  };
  </script>
  