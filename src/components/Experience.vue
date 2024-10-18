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
            <span>{{ experience.designation }}</span>
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
            `Took ownership of the Safety module and implemented it with high quality. Initiated Leverage discussion, and modified
device control feature, which improved Analytics for inventory and Utilization.`,
            `Jest was utilized as the unit testing framework to verify the code.`,
            `Provided solutions for Map-related Leverage bugs. Made sure sprint goals are achieved on the date. Participated in planning
and sprint demos.`,
          ],
          duration: "October 2023 - Present",
        },
        {
          id: 2,
          title: "CIRCULAR-CITY(UI), London, United Kingdom",
          description: [
            `Took ownership of the UI with responsiveness and designed it with high quality. Provided solutions for media query-related
bugs. Made sure sprint goals are achieved on the date.`,
            `Worked in python for the back end, supported team to achieve goals on date and deals with client directly.`,
          ],
          duration: "August 2022 - October 2023",
        },
        {
          id: 3,
          title: "Telematic VIA Motors, React js - United States",
          description: [
            `Took ownership of the motor tree, vehicle list view module and took ownership implemented it with high quality. Provided
solutions for relationship-tree fix`,
            `Examined the team's code modifications to make sure they had created an optimal solution.`,
          ],
          duration: "April 2021 - August 2022",
        },
        {
          id: 4,
          title: "HELPZ, Vue js - United Kingdom",
          description: [
            `Took ownership of the Admin end and implemented it with high quality.`,
            `Responsible for development of new features and maintenance of existing features, and responsible for all phases of development.`,
            `Vitest was utilized as the unit testing framework to verify the code.`,
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

h2 {
  text-align: center;
  margin-bottom: 30px;
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
  border-bottom: 1px solid #ddd;
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
}

.description-list {
  padding-left: 20px;
  margin-top: 10px;
}

.description-list li {
  margin-bottom: 10px;
}

/* Limit list item to 3 lines */
.experience-description {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 4.5em; /* height for 3 lines with line height of 1.5 */
}
</style>
