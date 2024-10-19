<template>
  <section>
    <div class="experience-section">
      <h2>Experience</h2>
      <ul>
        <li
          v-for="experience in Experience"
          :key="experience.id"
          class="experience-item"
        >
          <div class="experience-details">
            <h3>{{ experience.title }}</h3>
            <span class="designation">{{ experience.designation }}</span>
            <ul class="description-list">
              <li
                v-for="(point, index) in experience.description"
                :key="index"
                class="experience-description"
              >
                {{ point }}
              </li>
            </ul>
          </div>
          <span>{{ experience.duration }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      Experience: [
        {
          id: 1,
          title: "Celsior Technologies",
          designation: "Module Lead",
          description: [
            `Design and implement software modules, ensuring alignment with overall project architecture and introduced new features
and maintenance of existing features.`,
            `Involve in developing the complete front end development using Tailwind CSS, JavaScript, React, Next.js. Work with multiple
onshore teams.
`,
            `Managed the production deployment process, ensuring smooth and efficient releases using GitLab, Jira (used to define
release goals and prioritize tasks).
`,
          ],
          duration: "October 2023 - Present",
        },
        {
          id: 2,
          title: "CodeCraft Technologies",
          designation: "Senior Engineer",
          description: [
            `Worked with Node Packet Manager(NPM), Dynamo DB and used React and VUE.js library functions and GraphQL for the
logical implementation part at client side for all the application.`,
            `Worked with Vuex for the state management and deals with client directly for the scrum and sprint meetings, make sure
sprint goals are achieved on a date`,
            `Maintained and improved existing codebases and review code changes.`,
          ],
          duration: "August 2022 - October 2023",
        },
        {
          id: 3,
          title: "Tanisha Systems",
          designation: "Application Developer",
          description: [
            `Implemented and optimized micro front-end architectures for seamless integration and scalability`,
            `Participated actively in Agile/Scrum meetings and contribute to continuous improvement.`,
            `Collaborated with cross-functional teams to gather requirements and create technical solutions.`,
          ],
          duration: "April 2021 - August 2022",
        },
        {
          id: 4,
          title: "Zencode Group",
          designation: "Frontend Developer",
          description: [
            `Demonstrated expertise in HTML5, CSS3, object-orientated JavaScript and large JavaScript applications.`,
            `Handled Interns to instruct python fundamentals and things.`,
            `Handled OAuth and JWT protocols to ensure secure authentication and authorization`,
          ],
          duration: "December 2018 - April 2021",
        },
      ],
    };
  },
};
</script>

<style scoped>
.Experience-section {
  padding: 20px;
  text-align: center;
}
.designation {
  font-weight: bold;
  color: #5e5959;
}

h2 {
  text-align: center;
  margin-bottom: 30px;
  font-weight: bold;
}

ul {
  text-align: left;
  padding: 0;
}
.experience-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
}

.experience-details {
  flex-basis: 70%;
}

.experience-link {
  text-decoration: none;
  color: #007bff;
  background-color: #f0f0f0;
  padding: 10px 15px;
  border-radius: 5px;
  font-weight: bold;
}

.experience-link:hover {
  background-color: #007bff;
  color: #fff;
  transition: background-color 0.3s ease;
}

h3 {
  margin: 0;
  font-size: 18px;
  font-weight: bold;
  padding: 10px 0px;
}

.description-list {
  padding-left: 20px;
  margin-top: 10px;
}

.description-list li {
  margin-bottom: 10px;
}

.experience-description {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 4.5em;
}
@media screen and (max-width: 576px) {
  .projects-section,
  .description-list {
    padding: 0px;
  }
  .experience-item {
    text-align: center;
    flex-direction: column;
  }
  .experience-description {
    display: block;
    text-align: center;
  }
}
</style>
