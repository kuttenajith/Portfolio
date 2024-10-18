<template>
  <section id="skills">
    <div class="skills-part">
      <h2>Skills</h2>
      <div class="skills-container">
        <div class="skill" v-for="skill in skills" :key="skill.name">
          <img
            :src="skill.logo"
            :alt="skill.name + ' logo'"
            class="skill-logo"
          />
          <span class="skill-name">{{ skill.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import html5 from "../assets/svg/html-5.svg";
import css from "../assets/svg/css-3-logo.svg";
import vue from "../assets/svg/vue.svg";
import js from "../assets/svg/js.svg";
import ts from "../assets/svg/ts.svg";
import jira from "../assets/svg/jira.svg";
import bootstrap from "../assets/svg/bootstrap.svg";
import next from "../assets/svg/next.svg";
import jenkins from "../assets/svg/jenkins.svg";
import go from "../assets/svg/go.svg";
import postgresql from "../assets/svg/postgresql.svg";
import github from "../assets/svg/github.svg";
import aws from "../assets/svg/aws.svg";
import firebase from "../assets/svg/firebase.svg";
import node from "../assets/svg/node.svg";
import react from "../assets/svg/react.svg";
import tailwindCss from "../assets/svg/tailwind-css.svg";

export default defineComponent({
  name: "Skills",
  data() {
    return {
      skills: [
        { name: "HTML5", logo: html5 },
        { name: "CSS3", logo: css },
        { name: "Bootstrap", logo: bootstrap },
        { name: "JavaScript", logo: js },
        { name: "TypeScript", logo: ts },
        { name: "Vue.js", logo: vue },
        { name: "React", logo: react },
        { name: "Tailwind", logo: tailwindCss },
        { name: "Golang", logo: go },
        { name: "Node.js", logo: node },
        { name: "GitHub", logo: github },
        { name: "PostgreSQL", logo: postgresql },
        { name: "AWS", logo: aws },
        { name: "Firebase", logo: firebase },
        { name: "Jira", logo: jira },
        { name: "Jenkins", logo: jenkins },
        { name: "Next", logo: next },
      ],
    };
  },
});
</script>

<style scoped>
.skills-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 30px;
}

.skill {
  display: flex;
  flex-direction: column;
  padding: 30px;
  align-items: center;
  background-color: #d7fffe;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.skill-logo {
  width: 40px;
  height: 40px;
  margin: 10px;
}

.skill-name {
  font-size: 1.2rem;
  font-weight: 500;
}
@media screen and (max-width: 576px) {
  .skills-container {
    padding: 30px 0px;
  }
}
</style>
