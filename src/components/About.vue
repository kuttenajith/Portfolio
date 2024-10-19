<template>
  <div>
    <img src="../assets/profile-image.jpeg" />
    <h2>{{ name }}</h2>
    <p class="bio">{{ bio }}</p>
    <div class="description">{{ description }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Ajith Amarnath",
      bio: "Module Lead",
      description: `5.10 years of experience designing and building responsive web design and mobile apps. Proficient with HTML, CSS and JS
Frameworks, with extensive knowledge of UX and user psychology. Notable achievements include boosting the conversion rate
of an existing website by 94% with improved code and design.`,
    };
  },
};
</script>
<style scoped>
h2 {
  text-align: center;
  font-weight: bold;
}
img {
  width: 100%;
  max-width: 250px;
  border-radius: 15%;
}
.bio {
  margin: 10px 0px;
  font-weight: bold;
}
.description {
  width: 100%;
  max-width: 700px;
  margin: auto;
}
</style>
