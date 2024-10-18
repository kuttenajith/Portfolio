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
@media screen and (max-width: 576px) {
  .header-part {
    padding: 15px 0px;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #d7fffe;
    color: white;
    padding: 20px;
    text-align: center;
    z-index: 1000;
  }
  .body-section {
    padding: 70px 0px;
  }
}
</style>
