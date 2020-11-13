<template>
  <div class="home">
    <link
      href="https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700,700i,900,900i&amp;subset=latin-ext"
      rel="stylesheet"
    />

    <div class="wrapper">
      <table class="table-scores">
        <thead>
          <tr>
            <th>
              <div class="label">Project name</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(project, index) in getProjects" :key="index">
            <td>
              <div class="label">{{ project.project_name }}</div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="table-data-wrapper">
        <table class="table-data">
          <thead>
            <tr>
              <th>
                <div class="label">Developer</div>
              </th>
              <th>
                <div class="label">Main Contractor</div>
              </th>
              <th>
                <div class="label">Area</div>
              </th>
              <th>
                <div class="label">State</div>
              </th>
              <th>
                <div class="label">Status</div>
              </th>
              <th>
                <div class="label">Sector</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(project, index) in getProjects" :key="index">
              <td>
                <div class="label">{{ project.project_name }}</div>
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
                <ProjectBadge :status="project.status"/>
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
