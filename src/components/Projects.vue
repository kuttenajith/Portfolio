<template>
  <section>
    <div class="projects-section">
      <h2>Projects</h2>
      <ul>
        <li v-for="project in projects" :key="project.id" class="project-item">
          <div class="project-details">
            <h3>{{ project.title }}</h3>
            <ul class="description-list">
              <li
                v-for="(point, index) in project.description"
                :key="index"
                class="project-description"
              >
                {{ point }}
              </li>
            </ul>
          </div>
          <a
            v-if="project.link"
            :href="project.link"
            class="project-link"
            target="_blank"
            >View Project</a
          >
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Cox Prosight, React js - London, United Kingdom",
          description: [
            `Took ownership of the Safety module and implemented it with high quality. Initiated Leverage discussion, and modified
device control feature, which improved Analytics for inventory and Utilization.`,
            `Jest was utilized as the unit testing framework to verify the code.`,
            `Provided solutions for Map-related Leverage bugs. Made sure sprint goals are achieved on the date. Participated in planning
and sprint demos.`,
          ],
          link: "https://www.coxprosight.com/",
        },
        {
          id: 2,
          title: "CIRCULAR-CITY(UI), London, United Kingdom",
          description: [
            `Took ownership of the UI with responsiveness and designed it with high quality. Provided solutions for media query-related
bugs. Made sure sprint goals are achieved on the date.`,
            `Worked in python for the back end, supported team to achieve goals on date and deals with client directly.`,
          ],
          link: "https://www.circularcity.asia/",
        },
        {
          id: 3,
          title: "Telematic VIA Motors, React js - United States",
          description: [
            `Took ownership of the motor tree, vehicle list view module and took ownership implemented it with high quality. Provided
solutions for relationship-tree fix`,
            `Examined the team's code modifications to make sure they had created an optimal solution.`,
          ],
          link: "https://www.viamotors.com/vehicles/",
        },
        {
          id: 4,
          title: "HELPZ, Vue js - United Kingdom",
          description: [
            `Took ownership of the Admin end and implemented it with high quality.`,
            `Responsible for development of new features and maintenance of existing features, and responsible for all phases of development.`,
            `Vitest was utilized as the unit testing framework to verify the code.`,
          ],
          link: "https://www.viamotors.com/vehicles/",
        },
        {
          id: 5,
          title: "IGoalZero, React JS, golang - United States",
          description: [
            `Took ownership of the Print Details module and implemented both Generic Print and Custom Print with high quality.
Suggested Picky component which improved essential fixes of the dropdown that we have in the project`,
            `Completed CUSTOM PRINT module with PDFME library in Auditor end to preview and send or email the report. Provided
solutions for library and PDF related bugs. Make sure sprint goals are achieved on a date.`,
          ],
          link: "https://www.igoalzero.com/",
        },
        {
          id: 6,
          title: "CSIDI - IBM, United States",
          description: [
            `Took ownership of the Blue Pages and implemented it with high quality. Made sure sprint goals are achieved on the date.
Participated in planning and sprint demos directly with clients.`,
            `Participated actively in Agile/Scrum meetings and contributed to continuous improvement.`,
          ],
          link: "https://www.csidi.org/",
        },
        {
          id: 7,
          title: "FBFS - Vue JS, golang - United Kingdom",
          description: [
            `Took ownership of the Admin end and implemented it with high quality. Made sure sprint goals are achieved on the date.
Participated in planning and sprint demos.`,
            `Real-time experience in building and deploying micro front-end architectures.`,
          ],
          link: "https://www.fbfs.com/",
        },
      ],
    };
  },
};
</script>

<style scoped>
.projects-section {
  padding: 20px;
  text-align: center;
}

h2 {
  text-align: center;
  margin-bottom: 30px;
}

ul {
  text-align: left;
  padding: 0;
}

.project-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.project-details {
  flex-basis: 70%;
}

.project-link {
  text-decoration: none;
  color: #007bff;
  background-color: #f0f0f0;
  padding: 10px 15px;
  border-radius: 5px;
  font-weight: bold;
}

.project-link:hover {
  background-color: #007bff;
  color: #fff;
  transition: background-color 0.3s ease;
}

h3 {
  margin: 0;
  font-size: 18px;
  font-weight: bold;
}

.description-list {
  padding-left: 20px;
  margin-top: 10px;
}

.description-list li {
  margin-bottom: 10px;
}

/* Limit list item to 3 lines */
.project-description {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 4.5em; /* height for 3 lines with line height of 1.5 */
}
</style>
