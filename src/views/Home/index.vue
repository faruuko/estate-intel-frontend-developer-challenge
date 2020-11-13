<template>
  <div class="home">
    <!-- <ProjectBadge /> -->
    <div>
      <table>
        <tr>
          <th>Project name</th>
          <th>Developer</th>
          <th>Main Contractor</th>
          <th>Area</th>
          <th>State</th>
          <th>Status</th>
          <th>Sector</th>
        </tr>

        <tr v-for="(project, index) in getProjects" :key="index">
          <td>{{ project.project_name }}</td>
          <td>{{ project.developer }}</td>
          <td>{{ project.main_contractor }}</td>
          <td>{{ project.region }}</td>
          <td>{{ project.state }}</td>
          <td><ProjectBadge :status='project.status' /></td>
          <td>{{ project.sector }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style lang="sass">
@import "style.sass";
</style>
<script src="./script.js"></script>
