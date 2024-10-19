<template>
  <div>
    <h2>Contact Me</h2>
    <form @submit.prevent="submitForm" class="form-elements">
      <div class="element">
        <label for="name">Your Name:</label>
        <input
          v-model="form.name"
          type="text"
          id="name"
          required
          placeholder="Enter your name"
        />
      </div>
      <div class="element">
        <label for="email">Your Email:</label>
        <input
          v-model="form.email"
          type="email"
          id="email"
          required
          placeholder="Enter your Email-Id"
        />
      </div>
      <div class="element">
        <label for="message">Your Message:</label>
        <textarea
          v-model="form.message"
          id="message"
          required
          placeholder="Enter your message"
        ></textarea>
      </div>
      <div class="button-section">
        <button
          type="submit"
          :disabled="!form.name || !form.email || !form.message"
        >
          Send
        </button>
      </div>
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
h2 {
  text-align: center;
  margin-bottom: 30px;
  font-weight: bold;
}
.form-elements .element input {
  height: 50px;
  margin-top: 10px;
  border-radius: 15px;
  border-color: aquamarine;
  box-shadow: 4px 4px #d7fffe;
}
.form-elements .element textarea {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}
.button-section {
  padding: 10px 0px;
}
button {
  width: 100%;
  max-width: 200px;
  margin: auto;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
}
button:disabled:not([hover]) {
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
  pointer-events: none;
}
button:hover {
  color: black;
  background-color: white;
  border: 1px solid #d7fffe;
}

@media screen and (max-width: 576px) {
  .element {
    padding: 10px !important;
  }
}
</style>
