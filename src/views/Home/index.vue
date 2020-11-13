<template>
  <div class="home">
    <div class="wrapper">
      <div class="table-head-wrapper">
        <table class="project-name">
          <thead>
            <tr>
              <th>
                <div class="label bold">Project name</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(project, index) in projects" :key="index">
              <td>
                <div class="label bold">{{ project.project_name }}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="table-data-wrapper">
        <table class="table-data">
          <thead>
            <tr>
              <th>
                <div class="label bold">Developer</div>
              </th>
              <th>
                <div class="label bold">Main Contractor</div>
              </th>
              <th>
                <div class="label bold">Area</div>
              </th>
              <th>
                <div class="label bold">State</div>
              </th>
              <th>
                <div class="label bold">Status</div>
              </th>
              <th>
                <div class="label bold">Sector</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(project, index) in projects" :key="index">
              <td>
                <div class="label">{{ project.developer }}</div>
              </td>
              <td>
                <div class="label">{{ project.main_contractor }}</div>
              </td>
              <td>
                <div class="label">{{ project.region }}</div>
              </td>
              <td>
                <div class="label">{{ project.state }}</div>
              </td>
              <td>
                <ProjectBadge :status="project.status" />
              </td>
              <td>
                <div class="label">{{ project.sector }}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "style.scss";
</style>
<script src="./script.js"></script>
