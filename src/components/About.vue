<template>
  <div>
    <img src="../assets/profile-image.jpeg" />
    <h1>{{ name }}</h1>
    <p>{{ bio }}</p>
    <span>{{ description }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Ajith Amarnath",
      bio: "Module Lead",
      description: `5.10 years of experience designing and building responsive web design and mobile apps. Proficient with HTML, CSS and JS
Frameworks, with extensive knowledge of UX and user psychology`,
    };
  },
};
</script>
<style scoped>
img {
  width: 100%;
  max-width: 250px;
  border-radius: 15%;
}
</style>
