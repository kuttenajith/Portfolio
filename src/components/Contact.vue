<template>
  <div>
    <h1>Contact Me</h1>
    <form @submit.prevent="submitForm" class="form-elements">
      <div class="element">
        <label for="name">Name</label>
        <input v-model="form.name" type="text" id="name" required />
      </div>
      <div class="element">
        <label for="email">Email</label>
        <input v-model="form.email" type="email" id="email" required />
      </div>
      <div class="element">
        <label for="message">Message</label>
        <textarea v-model="form.message" id="message" required></textarea>
      </div>
      <div class="button-section"><button type="submit">Send</button></div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      console.log("Form submitted:", this.form);
    },
  },
};
</script>
<style scoped>
.form-elements {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  align-items: normal;
  margin: auto;
  padding: 15px 0px;
}
.form-elements .element {
  padding: 10px 0px;
  display: grid;
}
.form-elements .element input,
textarea {
  height: 50px;
  margin-top: 10px;
  border-radius: 15px;
  border-color: aquamarine;
  box-shadow: 4px 4px #d7fffe;
}
.button-section {
  padding: 10px 0px;
}
button {
  width: 100%;
  max-width: 200px;
  margin: auto;
  padding: 10px 0px;
  border-radius: 20px;
  background-color: #d7fffe;
  cursor: pointer;
  border: none;
}
button:hover {
  color: black;
  background-color: white;
  border: 1px solid #d7fffe;
}
</style>
