<template>
  <section id="skills">
    <div class="skills-part">
      <h2>Skills</h2>
      <ul>
        <li class="skills-item">
          <h3>Frontend:</h3>
          <span>HTML5, CSS3, JavaScript, React, Vue.js, Tailwind</span>
        </li>
        <li class="skills-item">
          <h3>Backend:</h3>
          <span>Node.js, Python, Golang</span>
        </li>
        <li class="skills-item">
          <h3>Database:</h3>
          <span>MongoDB, SQL, PostgreSQL</span>
        </li>
        <li class="skills-item">
          <h3>Tools:</h3>
          <span>Git, Bitbucket, Jenkins, AWS, Firebase</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Skills",
});
</script>

<style scoped>
.skills-part {
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
}

ul {
  list-style-type: none;
  padding: 0;
}

.skills-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px 0;
}

.skills-item h3 {
  margin: 0;
  font-weight: 600;
  font-size: 18px;
  flex-basis: 30%;
  text-align: right;
}

.skills-item span {
  text-align: right;
  flex-basis: 65%;
  font-size: 16px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}
</style>
