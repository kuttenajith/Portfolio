<template>
  <div>
    <header class="header-part">
      <nav>
        <router-link to="/">About</router-link>
        <router-link to="/skills">Skills</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/resume">Resume</router-link>
        <router-link to="/experience">Experience</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </header>
    <router-view class="body-section" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header-part {
  padding: 30px;
  display: flex;
  justify-content: end;
}
.header-part a {
  padding: 0px 5px;
  color: #34ded9;
  text-decoration: none;
}
.header-part a:hover {
  color: black;
}
.body-section {
  padding: 30px;
  text-align: center;
}
</style>
