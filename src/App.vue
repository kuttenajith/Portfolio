<template>
  <div>
    <header class="header-part">
      <nav>
        <router-link to="/">About</router-link>
        <router-link to="/skills">Skills</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/experience">Experience</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </header>
    <router-view class="body-section" />
    <footer class="footer-part">
      <p>© 2024 Ajith Amarnath</p>
      <div>
        <a
          v-for="network in networks"
          :key="network.name"
          :href="network.link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            :src="network.logo"
            :alt="network.name + ' logo'"
            class="network-logo"
          />
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
import linkedin from "./assets/svg/linkedin.svg";
import github from "./assets/svg/github.svg";
import phone from "./assets/svg/phone.svg";
export default {
  data() {
    return {
      networks: [
        {
          name: "Linkedin",
          logo: linkedin,
          link: "https://www.linkedin.com/in/ajith-k-a-18b71713b/",
        },
        {
          name: "Github",
          logo: github,
          link: "https://github.com/kuttenajith?tab=repositories",
        },
        { name: "Phone", logo: phone, link: "tel:+91 7904949080" },
      ],
    };
  },
};
</script>

<style scoped>
.network-logo:hover {
  transform: scale(1.1);
}
.header-part {
  padding: 30px 10px 0px 0px;
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
.footer-part {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 1000;
  bottom: 0px;
  width: 100%;
  padding: 15px;
  background-color: #d7fffe;
}
.footer-part .network-logo {
  width: 100%;
  max-width: 25px;
  cursor: pointer;
  margin: 0px 5px;
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
    text-align: center;
    z-index: 1000;
  }
  .body-section {
    padding: 70px 0px;
  }
}
</style>
